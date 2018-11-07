import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';
import {User} from '../types/User';
import {Todo} from '../types/Todo';
import {map} from 'rxjs/operators';

function dataToMap<T>(data): Map<number, T> {
  return new Map(data.map(d => [d.id, d]));
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  public getTodosWithUsers() {
    return forkJoin<Map<number, User>, Todo[]>(
      this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(map(users => dataToMap<User>(users))),
      this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    ).pipe(map(([users, todos]) => {
      return todos.map(todo => {
        todo.user = users.get(todo.userId);
        return todo;
      });
    }));
  }
}
