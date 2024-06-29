import { CommonModule, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Task {
  taskname: string;
  dueDate: string;
  done: boolean;
}

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
  imports: [FormsModule, CommonModule,NgClass]
})
export class ListTasksComponent implements OnInit {
  tasks: Task[] = [];
  name: string = '';
  darkMode = false;
  currentDate: Date = new Date();


  constructor(private route: ActivatedRoute,private cdr: ChangeDetectorRef) {
    this.name = this.route.snapshot.paramMap.get('name') ?? '';
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    if (typeof localStorage !== 'undefined') {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
        this.tasks = JSON.parse(tasks);
        // Ensure each task has 'done' property correctly initialized
      }
    }
  }

  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  

  sortedTasks(): Task[] {
    return this.tasks.slice().sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  }

  isOverdue(task: Task): boolean {
    return !task.done && new Date(task.dueDate) < this.currentDate;
  }

  // updateTasks(task: Task): void {
  //   this.saveTasks(); // Save tasks to localStorage after updating
  // }
  isTaskDoneAndNotOverdue(task: Task): boolean {
    return task.done && new Date(task.dueDate) >= this.currentDate;
  }

   isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  updateTasks(task: Task): void {
    console.log('Updating task:', task);
    task.done = !task.done; // Example toggle
    this.saveTasks(); // Save tasks to localStorage after updating
    this.cdr.detectChanges(); // Trigger change detection
  }
}
