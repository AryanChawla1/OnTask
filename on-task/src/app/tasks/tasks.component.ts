import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task/task';
import { TaskData } from '../test-data/tasks-data';

@Component({
   selector: 'app-tasks',
   templateUrl: './tasks.component.html',
   styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
   tasks = TaskData.tasks;
   classes: string[] = [];
   colors = this.setColors();
   progresses: any = {
      0: '#FF0000',
      1: '#FFAE42',
      2: '#0000FF',
      3: '#0D98BA',
      4: '#90EE90',
      5: '#00FF00',
   };

   addTask(newTask: Task) {
      if (!this.classes.includes(newTask.className)) {
         this.classes.push(newTask.className);
      }
      TaskData.tasks.push(newTask);

      if (!(newTask.className in this.colors)) {
         this.colors[newTask.className] = '#' + Math.floor(Math.random() * 16777215).toString(16);
      }
   }

   getStyling(task: Task) {
      for (let i = 0; i < this.classes.length; i++) {
         if (task.className === this.classes[i]) {
            return i;
         }
      }
      return;
   }

   getColor(task: Task) {
      return this.colors[task.className];
   }

   setColors() {
      var setupColors: any = {};
      for (let i = 0; i < this.tasks.length; i++) {
         if (!(this.tasks[i].className in setupColors)) {
            setupColors[this.tasks[i].className] = '#' + Math.floor(Math.random() * 16777215).toString(16); //Random color generator
         }
      }
      return setupColors;
   }

   getProgress(task: Task) {
      return this.progresses[task.progress];
   }

   editTask(id: number) {
      this.router.navigate(['edit', id]);
   }

   constructor(private router: Router, private httpClient: HttpClient) {
      this.httpClient.get('http://localhost:8000/api/get/tasks').subscribe((response) => {
         if (response != null) {
            var tasks_json = Object.values(response);
            for (let i = 0; i < tasks_json.length; i++) {
               tasks_json[i]['dueDate'] = new Date(tasks_json[i]['dueDate']);
               if (TaskData.search(tasks_json[i]['id']).name == 'error') {
                  var new_task = new Task(
                     tasks_json[i]['name'],
                     tasks_json[i]['className'],
                     tasks_json[i]['dueDate'],
                     tasks_json[i]['progress'],
                     tasks_json[i]['priority'],
                     tasks_json[i]['type'],
                     tasks_json[i]['id']
                  );
                  this.addTask(new_task);
               } else {
                  var oldTask = TaskData.search(tasks_json[i]['id']);
                  oldTask.setValues(
                     tasks_json[i]['name'],
                     tasks_json[i]['className'],
                     tasks_json[i]['dueDate'],
                     tasks_json[i]['progress'],
                     tasks_json[i]['priority'],
                     tasks_json[i]['type']
                  );
               }
            }
            TaskData.sortTasks();
         }
      });
      console.log(TaskData.tasks);
   }

   ngOnInit(): void {}
}
