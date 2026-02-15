import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Admin } from './pages/admin/admin';
import { User } from './pages/user/user';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  //   { path: 'contact', component: Contact },

  // localhost:4200/contact/100/srinivas
  { path: 'contact/:id/:name', component: Contact },
  {
    path: 'contact',
    component: Contact,
    children: [
      // localhost:4200/contact/user
      { path: 'user', component: User },
      // localhost:4200/contact/admin
      { path: 'admin', component: Admin },
    ],
  },
];

