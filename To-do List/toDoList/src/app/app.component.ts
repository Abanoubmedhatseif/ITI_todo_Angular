import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddTaskButtonComponent } from './add-task-button/add-task-button.component';
import { ListArrayComponent } from './list-array/list-array.component';
import { FormsModule } from '@angular/forms';
;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,AddTaskButtonComponent,ListArrayComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDoList';
}
