import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
    links = [
        {route: '/home', name: 'Home', index: 0},
        {route: '/todos', name: 'Todos', index: 1}
    ];
    activeLinkIndex = -1;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe(() => {
            this.activeLinkIndex = this.links.indexOf(this.links.find(tab => tab.route === this.router.url));
        });
    }

}
