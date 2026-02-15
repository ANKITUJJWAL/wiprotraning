import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  template: `
    <h2>Status Viewer</h2>

    <button (click)="status='loading'">Loading</button>
    <button (click)="status='success'">Success</button>
    <button (click)="status='error'">Error</button>

    @switch (status) {
      @case ('loading') {
        <p>Loading data...</p>
      }
      @case ('success') {
        <p>Data loaded successfully!</p>
      }
      @case ('error') {
        <p>Error occurred</p>
      }
      @default {
        <p>Unknown state</p>
      }
    }
  `
})
export class Status {
  status = 'loading';
}

