import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/bookservice';
import { IBook } from '../../model/IBook';

@Component({
  selector: 'app-book',
  standalone: true,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book implements OnInit {
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.loadBooks();
  }

  // Safe: runs only after constructor
  get books() {
    return this.bookService.books;
  }

  add(title: string, author: string, year: string) {
    if (!title || !author) return;

    this.bookService.addBook({
      title,
      author,
      year: Number(year),
    });
  }

  edit(book: IBook) {
    const title = prompt('Title', book.title);
    const author = prompt('Author', book.author);
    const year = prompt('Year', String(book.year));

    if (!title || !author) return;

    this.bookService.updateBook(book.id, {
      title,
      author,
      year: Number(year),
    });
  }

  remove(id: number) {
    if (confirm('Delete this book?')) {
      this.bookService.deleteBook(id);
    }
  }
}

