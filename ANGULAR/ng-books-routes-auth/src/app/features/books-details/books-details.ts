import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  template: `
    <h3>Book Detail</h3>

    @if (bookId()) {
      <p>Viewing book ID: {{ bookId() }}</p>
    }
  `
})
export class BookDetail {

  private route = inject(ActivatedRoute);

  bookId = signal<number | null>(null);

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.bookId.set(id ? Number(id) : null);
    });
  }
}

