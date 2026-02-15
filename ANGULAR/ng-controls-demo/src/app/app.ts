// // // // // import { Component, signal } from '@angular/core';
// // // // // import { RouterOutlet } from '@angular/router';

// // // // // @Component({
// // // // //   selector: 'app-root',
// // // // //   imports: [RouterOutlet],
// // // // //   templateUrl: './app.html',
// // // // //   styleUrl: './app.css'
// // // // // })
// // // // // export class App {
// // // // //   protected readonly title = signal('ng-controls-demo');
// // // // // }


// // // // import { Component } from '@angular/core';
// // // // import { RouterOutlet } from '@angular/router';
// // // // import { Dashboard } from './components/dashboard/dashboard'

// // // // @Component({
// // // //   selector: 'app-root',
// // // //   imports: [RouterOutlet,Dashboard],
// // // //   template: '<app-dashboard /><router-outlet />',
// // // //   styleUrl: './app.css'
// // // // })
// // // // export class App {
// // // //   // protected readonly title = signal('ng-controls-demo');

// // // // }


// // // import { Component } from '@angular/core';
// // // import { RouterOutlet } from '@angular/router';
// // // import { BookList } from './components/book-listapp/book-listapp'

// // // @Component({
// // //   selector: 'app-root',
// // //   imports: [RouterOutlet,BookList],
// // //   template: '<app-book-list /><router-outlet />',
// // //   styleUrl: './app.css'
// // // })
// // // export class App {
// // //   // protected readonly title = signal('ng-controls-demo');

// // // }



// // import { Component, signal } from '@angular/core';
// // import { RouterOutlet } from '@angular/router';
// // // import { Dashboard } from './components/dashboard/dashboard';
// // // import { BookList } from './components/booklist/booklist';
// // // import { LoginComponent } from './components/login/login';
// // // import { ProductsComponent } from './components/product/product';
// // // import { StatusComponent } from './components/status/status';
// // import { TasksComponent } from '../components/task/task';

// // @Component({
// //   selector: 'app-root',
// //   imports: [RouterOutlet, TasksComponent],
// //   templateUrl: './app.html',
// //   styleUrl: './app.css'
// // })
// // export class App {
// //   // protected readonly title = signal('ng-controls-demo');
// // }


// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { ProductList } from './components/product/product'

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,ProductList],
//   template: '<app-product-list /><router-outlet />',
//   styleUrl: './app.css'
// })
// export class App {
//   // protected readonly title = signal('ng-controls-demo');

// }

import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  template: `
    <h1>My Application</h1>
    <app-login></app-login>
  `
})
export class AppComponent {}