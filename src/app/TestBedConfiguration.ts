import {AppComponent} from './app.component';
import {TodosListComponent} from './components/todos-list/todos-list.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HomeComponent} from './components/home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RouterTestingModule} from '@angular/router/testing';

export const TestBedConfiguration = {
  imports: [
    RouterTestingModule,
    MaterialModule,
    DragDropModule,
    ScrollingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    TodosListComponent,
  ],
};
