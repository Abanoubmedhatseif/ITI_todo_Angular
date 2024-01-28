// task.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks: string[] = [];

  constructor() {}

  getTasks(): string[] {
    return this.tasks;
  }

  addTask(task: string): void {
    this.tasks.push(task);
  }

  iterateTasks(): Iterable<string> {
    return this.tasks;
  }

  filterTasks(filterCriteria: string): any {
    const index = this.tasks.indexOf(filterCriteria); // Find the index of the task to remove
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }



  }
