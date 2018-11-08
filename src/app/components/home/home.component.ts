import {Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TodosService} from '../../services/todos.service';
import {Subscription} from 'rxjs';
import {Todo} from '../../types/Todo';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
    public data: Subscription;
    public todo: Todo[];
    public done: Todo[];

    constructor(private readonly appService: TodosService) {
    }


    drop(event: CdkDragDrop<Todo[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed;
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    ngOnInit() {
        this.data = this.appService.getTodosWithUsers().subscribe(res => {
            this.todo = res.filter(item => item.completed === false);
            this.done = res.filter(item => item.completed === true);
        });
    }

    ngOnDestroy() {
        this.data.unsubscribe();
    }
}