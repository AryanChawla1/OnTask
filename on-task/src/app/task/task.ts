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

   setValues(name: string, className: string, dueDate: Date, progress: number, priority: boolean, type: string) {
      this.name = name;
      this.className = className;
      this.dueDate = dueDate;
      this.progress = progress;
      this.priority = priority;
      this.type = type;
   }
}
