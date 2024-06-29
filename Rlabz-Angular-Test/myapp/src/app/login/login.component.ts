import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from '../welcome/welcome.component';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,WelcomeComponent,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}
  username='kaija'
  password=123
  handleLogin(){
    this.router.navigate(['welcome',this.username]);
  }
}
