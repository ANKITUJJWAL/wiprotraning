import { Component } from '@angular/core';
import { BookService } from '../../services/book-service';
import { IBook } from '../../model/IBook';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css',
})
export class BooksList {
  editingBook: IBook | null = null;

  editTitle = '';
  editAuthor = '';
  editYear = 0;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.loadBooks();
  }

  // Safe: runs only after constructor
  //method name is the property name which refers to signal , books of BookService class
  // books=this.bookService.books;
  //books is a reference to the signal in the service,
  // so it will always reflect the current state of books in the service.
  // Whenever the books signal in the service updates, this.books will also update automatically,
  // ensuring that the component always has access to the latest list of books.
  get books() {
    return this.bookService.books;
  }

  add(title: string, author: string, year: string) {
    if (!title || !author) return;

    this.bookService.addBook({
      title, //same as title: title
      author,
      year: Number(year),
    });
  }

  // edit(book: IBook) {
  //   const title = prompt('Title', book.title);
  //   const author = prompt('Author', book.author);
  //   const year = prompt('Year', String(book.year));

  //   if (!title || !author) return;

  //   this.bookService.updateBook(book.id, {
  //     title,
  //     author,
  //     year: Number(year),
  //   });
  // }

  startEdit(book: IBook) {
    this.editingBook = book;
    this.editTitle = book.title;
    this.editAuthor = book.author;
    this.editYear = book.year || 0;
  }

  saveEdit() {
    if (!this.editingBook) return;

    this.bookService.updateBook(this.editingBook.id, {
      title: this.editTitle,
      author: this.editAuthor,
      year: this.editYear,
    });

    this.editingBook = null;
  }

  cancelEdit() {
    this.editingBook = null;
  }

  remove(id: number) {
    if (confirm('Delete this book?')) {
      this.bookService.deleteBook(id);
    }
  }
}

