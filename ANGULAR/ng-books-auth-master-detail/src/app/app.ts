import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './core/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar navbar-dark bg-dark px-3">
      <a class="navbar-brand text-white" routerLink="/books"> 📚 Book App </a>

      @if (auth.isLoggedIn()) {
        <button class="btn btn-outline-light" (click)="logout()">Logout</button>
      }
    </nav>

    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class App {
  auth = inject(AuthService);
  router = inject(Router);

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
