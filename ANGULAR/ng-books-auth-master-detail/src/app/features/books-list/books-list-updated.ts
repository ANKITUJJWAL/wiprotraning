import { Component } from '@angular/core';
import { BookService } from '../../sevices/book-service';
import { IBook } from '../../model/IBook';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books-list-updated.html',
})
export class BooksListUpdated {
  constructor(public bookService: BookService) {}

  ngOnInit() {
    this.bookService.loadBooks();
  }

  get books() {
    return this.bookService.books;
  }

  select(book: IBook) {
    this.bookService.selectBook(book);
  }

  createNew() {
    this.bookService.createEmptyBook();
  }
}
