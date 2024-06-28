import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LocalService } from '../local.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

interface Task {
  taskName: string;
  dueDate: string;
  completed: boolean;
  isDisabled: boolean;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent implements OnInit {
  
  tasks: Task[] = [];
  processing:boolean = false;
  constructor(private localService: LocalService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.tasks.forEach(task =>{
      if(task.completed===undefined){
        task.completed = false;
      }
      if(task.isDisabled===undefined){
        task.isDisabled = false;
      }
    });
    this.tasks.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
    console.log('Loaded tasks:', this.tasks);
  }

  markAsCompleted(index:number,completed: boolean) {
    this.processing=true;
    this.tasks[index].completed = completed;
    if (completed) {
      this.tasks[index].isDisabled = true;
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.processing=false;
  }

  isDueDate(dueDate: string):boolean{
    const today = new Date().setHours(0, 0, 0, 0);
    const TaskDate = new Date(dueDate).setHours(0, 0, 0, 0);
    return TaskDate<today;
  }
  
  deleteTask(index:number){
    this.tasks.splice(index,1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
