// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-book-listapp',
//   imports: [],
//   templateUrl: './book-listapp.html',
//   styleUrl: './book-listapp.css',
// })
// export class BookListapp {

// }


import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-book-list',
  standalone: true,
  template: `
    <h2>Book List</h2>

    <button (click)="addBook()">Add Book</button>
    <button (click)="clearBooks()">Clear</button>

    <ul>
      @for (book of books(); track book.id) {
        <li>{{ book.title }}</li>
      } @empty {
        <li>No books available</li>
      }
    </ul>
  `
})
export class BookList {

  books = signal([
    { id: 1, title: 'Angular' },
    { id: 2, title: 'Signals' },
    { id: 3, title: 'React' },
    { id: 4, title: 'Vue' }

  ]);

  addBook() {
    this.books.update(list => [
      ...list,
      { id: Date.now(), title: 'New Book' }
    ]);
  }

  clearBooks() {
    this.books.set([]);
  }
}