import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';

@Component({
   selector: 'app-tasks',
   templateUrl: './tasks.component.html',
   styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
   tasks = [
      new Task('item1', 'class1', new Date(), 0),
      new Task('item2', 'class2', new Date(), 0),
      new Task('item3', 'class1', new Date(), 0),
   ];
   classes = ['class1', 'class2'];
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
      this.tasks.push(newTask);

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

   currentTask = 'Test';

   constructor() {}

   ngOnInit(): void {}
}
