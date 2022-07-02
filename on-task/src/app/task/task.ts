export class Task {
   static counter = 0;
   ID: number;

   constructor(
      public name: string,
      public className: string,
      public dueDate: Date,
      public progress: number,
      public priority: boolean,
      public type: string
   ) {
      this.ID = Task.createID();
   }

   getID(): number {
      return this.ID;
   }

   static createID(): number {
      return Task.counter++;
   }
}
