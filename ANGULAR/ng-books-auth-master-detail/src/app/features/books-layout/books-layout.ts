import { Component } from '@angular/core';
import { BooksListUpdated } from '../books-list/books-list';
import { BookDetail } from '../book-detail/book-detail';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BooksListUpdated, BookDetail],
  template: `
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-md-5">
          <app-books-list></app-books-list>
        </div>

        <div class="col-md-7">
          <app-book-detail></app-book-detail>
        </div>
      </div>
    </div>
  `,
})
export class BooksLayout {}
