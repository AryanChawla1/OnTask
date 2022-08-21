export class Task {
   constructor(
      public name: string,
      public className: string,
      public dueDate: Date,
      public progress: number,
      public priority: boolean,
      public type: string,
      public ID?: number
   ) {}

   getID(): number {
      if (this.ID != undefined) return this.ID;
      return 0;
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
