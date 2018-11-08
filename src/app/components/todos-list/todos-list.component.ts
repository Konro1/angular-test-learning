import {Component, OnInit} from '@angular/core';
import {TodosService} from '../../services/todos.service';
import {Observable} from 'rxjs';
import {Todo} from '../../types/Todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
})
export class TodosListComponent implements OnInit {

  public todos: Observable<Todo[]>;

  constructor(private readonly appService: TodosService) {
  }

  ngOnInit() {
    this.todos = this.appService.getTodosWithUsers();
  }
}
