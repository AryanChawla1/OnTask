import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = [ new Task('item1', 'class1'), new Task('item2', 'class2'), new Task('item3', 'class 1')];

  addTask(newTask: Task) {
    this.tasks.push(newTask);
  }
  currentTask = 'Test';
  constructor() { }

  ngOnInit(): void {
  }

}
