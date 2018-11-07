import {TestBed} from '@angular/core/testing';

import {TodosService} from './todos.service';
import {Todo} from '../types/Todo';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {User} from '../types/User';


describe('TodosService', () => {

  let service: TodosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TodosService
      ]
    });
    service = TestBed.get(TodosService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get todos', () => {

    const mockUsers: User[] = [
      {
        id: 1,
        name: 'Bob',
        username: 'bob',
        email: 'test@gmail.com',
        address: null,
        phone: '1',
        website: 'www.yessss.com',
        company: null,
      }
    ];

    const mockTodos: Todo[] = [
      {
        id: 1,
        title: 'todo1',
        userId: 1,
        completed: false}
    ];

    service.getTodosWithUsers().subscribe(async (res: Todo[]) => {
      await expect(res).toContain({
        ...mockTodos[0],
        user: mockUsers[0]
      });
    });

    const userRequest = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(userRequest.request.method).toBe('GET');
    userRequest.flush(mockUsers);

    const todosRequest = httpMock.expectOne('https://jsonplaceholder.typicode.com/todos');
    expect(todosRequest.request.method).toBe('GET');
    todosRequest.flush(mockTodos);

    httpMock.verify();
  });
});
