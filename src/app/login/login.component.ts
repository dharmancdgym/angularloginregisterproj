import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (this.userService.validate(this.username, this.password)) {
      window.location.href = 'https://www.google.com/';
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
