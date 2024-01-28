import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-array',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-array.component.html',
  styleUrl: './list-array.component.css'
})
export class ListArrayComponent {
  constructor(public taskService: TaskService) {}
  isChecked : boolean = false ;
  
  // iterateTasks() {
  //   for (const task of this.taskService.iterateTasks()) {
  //     console.log(task);
  //   }
  // }
  
  deleteTask(filterCriteria: string) {
    this.taskService.filterTasks(filterCriteria);
    console.log(this.taskService);
  }

}
