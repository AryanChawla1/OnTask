export class Task {
   constructor(
      public name: string,
      public className: string,
      public dueDate: Date,
      public progress: number,
      public priority: boolean,
      public type: string
   ) {}
}
