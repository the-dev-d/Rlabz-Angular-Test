import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { OsComponent } from './os/os.component';



export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'welcome/:name',component:WelcomeComponent},
    {path:'tasks',component:ListTasksComponent},
    {path:'os',component:OsComponent},
    {path:'**',component:ErrorComponent}
];
