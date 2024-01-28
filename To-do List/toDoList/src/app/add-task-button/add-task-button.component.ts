import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-add-task-button',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task-button.component.html',
  styleUrl: './add-task-button.component.css'
})
export class AddTaskButtonComponent {
  constructor(private taskService: TaskService) {}

  taskToAdd: string = '';
  list : string[] = [];
  addtask(){
    this.taskService.addTask(this.taskToAdd);
    console.log("task added "+ this.taskToAdd);
    console.log(this.taskService);
    this.taskToAdd='';
  }
}
