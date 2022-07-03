import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskData } from '../test-data/tasks-data';
import { Task } from '../task/task';

@Component({
   selector: 'app-edit-task',
   templateUrl: './edit-task.component.html',
   styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
   task: Task;
   constructor(private route: ActivatedRoute) {
      this.task = new Task('error', 'error', new Date(), 0, true, 'error');
      this.route.params.subscribe((params) => {
         console.log(params);
         this.task = TaskData.search(params['id']);
      });
   }

   editTask(name: string, className: string, dueDate: string, progress: string, priority: boolean, type: string) {
      this.task.setValues(name, className, new Date(dueDate), parseInt(progress), priority, type);
   }

   getDate() {
      return (
         this.task.dueDate.getFullYear() + '-' + (this.task.dueDate.getMonth() + 1) + '-' + this.task.dueDate.getDate()
      );
   }

   ngOnInit(): void {}
}
