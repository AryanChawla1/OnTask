import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnChanges {

  @Input() task = '';
  @Output() newTask = new EventEmitter<Task>();

  addNewTask(name: string, className:string, dueDate: string) {
    console.log(dueDate);
    this.newTask.emit(new Task(name, className, new Date(dueDate)));
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
