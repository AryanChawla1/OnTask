import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = ['item1', 'item2', 'item3'];

  addTask(newTask: string) {
    this.tasks.push(newTask);
  }
  currentTask = 'Test';
  constructor() { }

  ngOnInit(): void {
  }

}
