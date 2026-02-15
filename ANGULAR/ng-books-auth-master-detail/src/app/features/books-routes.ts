import { Routes } from '@angular/router';
import { BookDetail } from './book-detail/book-detail';
import { BooksListUpdated } from './books-list/books-list-updated';

export const BOOKS_ROUTES: Routes = [
  { path: '', component: BooksListUpdated },
  { path: ':id', component: BookDetail },
];

