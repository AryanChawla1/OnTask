import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [AppComponent, TaskComponent, TasksComponent, EditTaskComponent],
   imports: [BrowserModule, AppRoutingModule, HttpClientModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
