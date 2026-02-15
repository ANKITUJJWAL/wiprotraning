import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div class="card shadow-lg p-4" style="width: 400px">
        <h4 class="text-center mb-4">
          @if (!isSignupMode) {
            Login
          } @else {
            Sign Up
          }
        </h4>

        <input [(ngModel)]="username" class="form-control mb-3" placeholder="Username" />

        <input
          [(ngModel)]="password"
          type="password"
          class="form-control mb-3"
          placeholder="Password"
        />

        <button class="btn btn-primary w-100 mb-2" (click)="isSignupMode ? register() : login()">
          @if (!isSignupMode) {
            Login
          } @else {
            Create Account
          }
        </button>

        <div class="text-center">
          <small>
            @if (!isSignupMode) {
              Don't have account?
              <a href="#" (click)="toggleMode($event)">Sign up</a>
            } @else {
              Already have account?
              <a href="#" (click)="toggleMode($event)">Login</a>
            }
          </small>
        </div>

        @if (errorMessage) {
          <div class="alert alert-danger mt-3">
            {{ errorMessage }}
          </div>
        }
      </div>
    </div>
  `,
})
export class Login {
  username = '';
  password = '';
  isSignupMode = false;
  errorMessage = '';

  private auth = inject(AuthService);
  private router = inject(Router);

  toggleMode(event: Event) {
    event.preventDefault();
    this.isSignupMode = !this.isSignupMode;
    this.errorMessage = '';
  }

  login() {
    this.auth.login(this.username, this.password).subscribe((res) => {
      if (res.status === 'success') {
        this.auth.setLoginState(true);
        this.router.navigate(['/books']);
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }

  register() {
    this.auth.register(this.username, this.password).subscribe({
      next: () => {
        this.isSignupMode = false;
        this.errorMessage = 'Account created. Please login.';
      },
      error: () => {
        this.errorMessage = 'User already exists';
      },
    });
  }
}
