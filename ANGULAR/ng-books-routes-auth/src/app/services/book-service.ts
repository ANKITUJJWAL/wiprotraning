import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { IBook } from '../model/IBook';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private API = 'http://localhost:3000/api/v1/books';

  // Signal holding books state
  books = signal<IBook[]>([]);

  private http = inject(HttpClient);
  // constructor(private http: HttpClient) {}

  // READ
  loadBooks() {
    this.http.get<IBook[]>(this.API).subscribe((data) => this.books.set(data));
  }

  // CREATE
  addBook(book: Omit<IBook, 'id'>) {
    this.http.post<IBook>(this.API, book).subscribe((newBook) => {
      this.books.update((list) => [newBook, ...list]);
      //appends new book to the end of the list instead of beginning
      // this.books.update((list) => [...list,newBook]);
    });
  }

  // UPDATE
  updateBook(id: number, book: Partial<IBook>) {
    this.http.put<IBook>(`${this.API}/${id}`, book).subscribe((updated) => {
      this.books.update((list) => list.map((b) => (b.id === id ? updated : b)));
    });
  }

  // DELETE
  deleteBook(id: number) {
    this.http.delete(`${this.API}/${id}`).subscribe(() => {
      this.books.update((list) => list.filter((b) => b.id !== id));
    });
  }

  getBookById(id: number) {
    return this.http.get<IBook>(`${this.API}/${id}`);
  }
}
