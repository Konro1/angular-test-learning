import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    links = [
        {route: '/', name: 'Home'},
        {route: 'todos', name: 'Todos'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
