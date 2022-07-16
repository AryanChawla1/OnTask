import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
   selector: 'app-task',
   templateUrl: './task.component.html',
   styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit, OnChanges {
   @Input() task = '';
   @Output() newTask = new EventEmitter<Task>();

   addNewTask(name: string, className: string, dueDate: string, progress: string, priority: boolean, type: string) {
      var task = new Task(name, className, new Date(dueDate), parseInt(progress), priority, type);
      this.newTask.emit(task);
      this.httpClient
         .post('https://on-task-database-default-rtdb.firebaseio.com/tasks.json', JSON.stringify(task))
         .subscribe((response) => {
            name = Object.values(response)[0];
            console.log(name);
            task.api_name = name;
         });
   }

   constructor(private httpClient: HttpClient) {}

   ngOnInit(): void {}

   ngOnChanges(changes: SimpleChanges): void {}
}
