import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodosListComponent} from './components/todos-list/todos-list.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'todos', component: TodosListComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
