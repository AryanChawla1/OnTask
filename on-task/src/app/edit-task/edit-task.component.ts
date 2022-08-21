import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskData } from '../test-data/tasks-data';
import { Task } from '../task/task';
import { HttpClient } from '@angular/common/http';

@Component({
   selector: 'app-edit-task',
   templateUrl: './edit-task.component.html',
   styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
   task: Task;
   constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
      this.task = new Task('error', 'error', new Date(), 0, true, 'error');
      this.route.params.subscribe((params) => {
         console.log(params);
         this.task = TaskData.search(params['id']);
      });
   }

   // I hate how this function works
   editTask(name: string, className: string, dueDate: string, progress: string, priority: boolean, type: string) {
      this.task.setValues(name, className, new Date(dueDate), parseInt(progress), priority, type);
      var obj = JSON.parse(JSON.stringify(this.task));
      obj.dueDate = dueDate;
      this.httpClient
         .put('http://localhost:8000/api/put/task/' + this.task.ID, JSON.stringify(obj))
         .subscribe((response) => {
            console.log(response);
         });
   }

   getDate() {
      var presentedDate = new Date(this.task.dueDate);
      presentedDate.setDate(this.task.dueDate.getDate() + 1);

      return presentedDate.toLocaleDateString('en-CA');
   }

   getType() {
      return this.task.type.toLowerCase();
   }
   ngOnInit(): void {}
}
