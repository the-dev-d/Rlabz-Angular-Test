import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LocalService } from '../local.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
  ]
})
export class HomeComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder,private LocalService:LocalService) {
    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      dueDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const newTask = { ...this.taskForm.value, completed: false };
      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('Saved tasks:', tasks);
      this.clearForm();
    }
  }

  clearForm() {
    this.taskForm.reset();
  }
}
