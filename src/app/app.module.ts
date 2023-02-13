import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeTasksComponent } from './home-tasks/home-tasks.component';
import { KidTasksComponent } from './kid-tasks/kid-tasks.component';
import { SelfTasksComponent } from './self-tasks/self-tasks.component';
import { WorkTasksComponent } from './work-tasks/work-tasks.component';
import { CompletedComponent } from './completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeTasksComponent,
    KidTasksComponent,
    SelfTasksComponent,
    WorkTasksComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
