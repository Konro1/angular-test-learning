import {Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TodosService} from '../../services/todos.service';
import {Subscription} from 'rxjs';
import {Todo} from '../../types/Todo';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    public data: Subscription;
    public todo: Todo[];
    public done: Todo[];

    constructor(private readonly appService: TodosService) {
    }


    drop(event: CdkDragDrop<string[]>) {
        console.log(event);
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
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