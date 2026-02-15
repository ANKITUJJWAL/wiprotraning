import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  template: `
    <h2>Tasks</h2>

    <button (click)="addTask()">Add Task</button>
    <button (click)="clear()">Clear</button>

    <ul>
      @for (task of tasks(); track task.id) {
        <li>{{ task.title }}</li>
      } @empty {
        <p>No tasks available</p>
      }
    </ul>
  `
})
export class TasksComponent {
  tasks = signal<{ id: number; title: string }[]>([]);
  counter = 1;

  addTask() {
    this.tasks.update(list => [
      ...list,
      { id: this.counter++, title: 'Task ' + this.counter }
    ]);
  }

  clear() {
    this.tasks.set([]);
  }
}
