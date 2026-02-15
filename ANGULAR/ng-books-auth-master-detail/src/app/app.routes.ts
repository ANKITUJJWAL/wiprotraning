import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { authGuard } from './core/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },

  //   {
  //     path: 'books',
  //     canActivate: [authGuard],
  //     loadChildren: () => import('./features/books-routes').then((m) => m.BOOKS_ROUTES),
  //   },

  {
    path: 'books',
    loadComponent: () => import('./features/books-layout/books-layout').then((m) => m.BooksLayout),
  },

  { path: '**', redirectTo: 'login' },
];
