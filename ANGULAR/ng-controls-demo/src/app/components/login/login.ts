import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h2>Login Status</h2>

    @if (isLoggedIn) {
      <p>Welcome User</p>
      <button (click)="logout()">Logout</button>
    } @else {
      <p>Please Login</p>
      <button (click)="login()">Login</button>
    }
  `
})
export class LoginComponent {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}

