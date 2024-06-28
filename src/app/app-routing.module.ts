import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { TasksComponent } from './tasks/tasks.component'; 
import { OsComponent } from './os/os.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'tasks', component: TasksComponent },
  { path: 'os', component: OsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
