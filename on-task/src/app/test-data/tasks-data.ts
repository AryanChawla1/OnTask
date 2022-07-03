import { Task } from '../task/task';
import { TasksComponent } from '../tasks/tasks.component';

export class TaskData {
   static tasks = [
      new Task('item1', 'class1', new Date(), 0, true, 'Exam'),
      new Task('item2', 'class2', new Date(), 0, true, 'Test'),
      new Task('item3', 'class1', new Date(), 0, false, 'Assignment'),
   ];
   constructor() {
      return TaskData.tasks;
   }
}
