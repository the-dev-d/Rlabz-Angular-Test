import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task {
  taskname: string;
  dueDate: string;
  done: boolean;
}

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  name: string = '';
  darkMode = false;
  tasks: Task[] = [];
  newTask: Task = { taskname: '', dueDate: '', done: false };

  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name') ?? '';
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  ngOnInit(): void {
    this.name = 'User'; // Initialize name if needed
    this.loadTasks();
  }

  addTask(): void {
    this.tasks.push({ ...this.newTask });
    this.saveTasks();
    this.newTask = { taskname: '', dueDate: '', done: false };
  }

  clearForm(): void {
    this.newTask = { taskname: '', dueDate: '', done: false };
  }

  loadTasks(): void {
    const tasksFromStorage = localStorage.getItem('tasks');
    if (tasksFromStorage) {
      this.tasks = JSON.parse(tasksFromStorage);
    }
  }

  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  updateTasks(): void {
    this.saveTasks();
  }
}
