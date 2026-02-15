// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   imports: [],
//   templateUrl: './dashboard.html',
//   styleUrl: './dashboard.css',
// })
// export class Dashboard {

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h2>User Dashboard</h2>

    <button (click)="login()">Login</button>
    <button (click)="logout()">Logout</button>

    <hr />

    @if (isLoggedIn) {
      @switch (role) {
        @case ('admin') {
          <p>Admin Panel</p>
        }
        @case ('user') {
          <p>User Panel</p>
        }
        @default {
          <p>Guest Panel</p>
        }
      }
    } @else {
      <p>Please login</p>
    }
  `
})
export class Dashboard{
  isLoggedIn = false;
  role: 'admin' | 'user' | 'guest' = 'guest';

  login() {
    this.isLoggedIn = true;
    this.role = 'user';
  }

  logout() {
    this.isLoggedIn = false;
  }
}