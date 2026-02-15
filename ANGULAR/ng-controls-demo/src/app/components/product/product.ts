import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `
    <h2>Products</h2>

    <button (click)="addProduct()">Add Product</button>

    <ul>
      @for (product of products; track product.id) {
        <li>{{ product.name }}</li>
      }
    </ul>
  `
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Mobile' }
  ];

  addProduct() {
    const id = this.products.length + 1;
    this.products.push({ id, name: 'Product ' + id });
  }
}

