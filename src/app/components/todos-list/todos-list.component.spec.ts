import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosListComponent} from './todos-list.component';
import {HttpClientModule} from '@angular/common/http';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        declarations: [TodosListComponent]
      })
      .compileComponents();

    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
