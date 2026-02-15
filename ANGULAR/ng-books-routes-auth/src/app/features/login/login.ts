import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  // templateUrl: './login.html',
  template: `
    <div class="container mt-5">
      <h3>Login</h3>

      <input [(ngModel)]="username" placeholder="Username" class="form-control mb-2" />
      <input
        [(ngModel)]="password"
        type="password"
        placeholder="Password"
        class="form-control mb-2"
      />

      <button class="btn btn-primary" (click)="login()">Login</button>
    </div>
  `,

  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  login() {
    this.auth.login(this.username, this.password);
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/books']);
    }
  }
}