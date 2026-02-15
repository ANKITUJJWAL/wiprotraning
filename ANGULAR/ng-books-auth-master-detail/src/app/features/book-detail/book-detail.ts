
import { Component } from '@angular/core';
import { BookService } from '../../sevices/book-service';
import { IBook } from '../../model/IBook';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-detail.html',
})
export class BookDetail {
  constructor(public bookService: BookService) {}

  get book() {
    return this.bookService.selectedBook();
  }

  save() {
    if (!this.book) return;

    if (this.book.id === 0) {
      this.bookService.addBook({
        title: this.book.title,
        author: this.book.author,
        year: this.book.year,
      });
    } else {
      this.bookService.updateBook(this.book.id, {
        title: this.book.title,
        author: this.book.author,
        year: this.book.year,
      });
    }

    // Optional: close panel AFTER save
    this.bookService.selectedBook.set(null);
  }

  delete() {
    if (!this.book) return;

    this.bookService.deleteBook(this.book.id);
    this.bookService.selectedBook.set(null);
  }
}

