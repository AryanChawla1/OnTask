import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = [ new Task('item1', 'class1', new Date()), new Task('item2', 'class2', new Date()), new Task('item3', 'class1', new Date())];
  classes = ['class1', 'class2'];

  addTask(newTask: Task) {
    if (!this.classes.includes(newTask.className)) {
      this.classes.push(newTask.className);
    }
    this.tasks.push(newTask);
  }

  getStyling(task: Task) {
    for (let i = 0; i < this.classes.length; i++) {
      if (task.className === this.classes[i]) {
        return i;
      }
    }
    return;
  }

  currentTask = 'Test';

  constructor() { }

  ngOnInit(): void {
  }

}
