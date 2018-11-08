import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosListComponent} from './todos-list.component';
import {TestBedConfiguration} from '../../TestBedConfiguration';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TestBedConfiguration)
      .compileComponents();

    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
