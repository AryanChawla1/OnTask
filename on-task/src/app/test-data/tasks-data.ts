import { Task } from '../task/task';

export class TaskData {
   public static tasks = [
      new Task('item1', 'class1', new Date(2032), 1, true, 'Exam'),
      new Task('item2', 'class2', new Date(), 0, true, 'Test'),
      new Task('item3', 'class1', new Date(), 0, false, 'Assignment'),
   ];

   public static search(id: number): Task {
      for (var task of TaskData.tasks) {
         if (task.getID() == id) {
            return task;
         }
      }
      return new Task('error', 'error', new Date(), 0, true, 'error');
   }
}
