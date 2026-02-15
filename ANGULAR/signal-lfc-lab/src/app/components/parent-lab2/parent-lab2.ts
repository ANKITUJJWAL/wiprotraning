import { Component } from '@angular/core';
import { ChildComponent } from '../child-lab2/child-lab2';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <h2>Parent Component</h2>

    <p>Count: {{ count }}</p>
    <button (click)="increment()">Increment</button>

    <hr />

    @if (count >= 0) {
      <app-child [value]="count"></app-child>
    }
  `
})
export class ParentComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
