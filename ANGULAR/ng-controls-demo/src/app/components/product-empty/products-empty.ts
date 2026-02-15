import { Component } from '@angular/core';

@Component({
  selector: 'app-products-empty',
  standalone: true,
  template: `
    <h2>Products</h2>

    <button (click)="clear()">Clear Products</button>

    <ul>
      @for (product of products; track product.id) {
        <li>{{ product.name }}</li>
      } @empty {
        <p>No products available</p>
      }
    </ul>
  `
})
export class ProductsEmptyComponent {
  products = [
    { id: 1, name: 'Book' },
    { id: 2, name: 'Pen' }
  ];

  clear() {
    this.products = [];
  }
}

