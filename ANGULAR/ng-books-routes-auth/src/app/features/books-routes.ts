import { Routes } from '@angular/router';
// import { BooksList } from './books-list/books-list';
import { BookDetail } from './books-details/books-details';
import { BooksListUpdated } from './books-list/books-list-updated';

export const BOOKS_ROUTES: Routes = [
  // { path: '', component: BooksList },
  { path: '', component: BooksListUpdated },
  { path: ':id', component: BookDetail },
];
