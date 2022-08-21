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
      var obj = JSON.parse(JSON.stringify(task));
      obj.dueDate = dueDate;
      this.httpClient.post('http://localhost:8000/api/post/task', JSON.stringify(obj)).subscribe((response) => {
         console.log(response);
         obj = Object.values(response);
         task.ID = obj[0];
      });
   }
   constructor(private httpClient: HttpClient) {}

   ngOnInit(): void {}

   ngOnChanges(changes: SimpleChanges): void {}
}
