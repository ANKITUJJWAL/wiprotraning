import { Component } from '@angular/core';
import { BookService } from '../../sevices/book-service';
import { IBook } from '../../model/IBook';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './books-list.html',
})
export class BooksListUpdated {
  selectedForEdit: IBook | null = null;
  selectedForDelete: IBook | null = null;

  editForm = {
    title: '',
    author: '',
    year: 0,
  };

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.loadBooks();
  }

  /* Whenever the books signal in the service updates, 
  this.books will also update automatically,
  ensuring that the component always has access to the 
  latest list of books. */
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

  openEdit(book: IBook) {
    this.selectedForEdit = book;

    // Pre-fill form
    this.editForm = {
      title: book.title,
      author: book.author,
      year: book.year ?? 0,
    };
  }

  cancelEdit() {
    this.selectedForEdit = null;
  }

  saveEdit() {
    if (!this.selectedForEdit) return;

    this.bookService.updateBook(this.selectedForEdit.id, {
      title: this.editForm.title,
      author: this.editForm.author,
      year: Number(this.editForm.year),
    });

    this.selectedForEdit = null;
  }

  // Instead of deleting immediately
  confirmDelete(book: IBook) {
    this.selectedForDelete = book;
  }

  cancelDelete() {
    this.selectedForDelete = null;
  }

  deleteConfirmed() {
    if (!this.selectedForDelete) return;

    this.bookService.deleteBook(this.selectedForDelete.id);
    this.selectedForDelete = null;
  }
}
