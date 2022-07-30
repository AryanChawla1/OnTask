import { Task } from '../task/task';

export class TaskData {
   public static tasks: Task[] = [];

   public static search(id: number): Task {
      for (var task of TaskData.tasks) {
         if (task.getID() == id) {
            return task;
         }
      }
      return new Task('error', 'error', new Date(), 0, true, 'error');
   }

   public static sortTasks() {
      TaskData.tasks.sort(
         (taskA, taskB) =>
            Number(taskB.priority) - Number(taskA.priority) || Number(taskA.dueDate) - Number(taskB.dueDate)
      );
   }
}
