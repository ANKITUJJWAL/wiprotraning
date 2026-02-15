import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = signal(false);
  private http = inject(HttpClient);
  private API = 'http://localhost:3000/api/v1/users';

  // login(username: string, password: string) {
  //   if (username === 'wipro' && password === 'wipro@123') {
  //     this.loggedIn.set(true);
  //     localStorage.setItem('auth', 'true');
  //   }
  // }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.API}/login`, { username, password });
  }

  register(username: string, password: string) {
    return this.http.post<any>(`${this.API}/register`, { username, password });
  }

  logout() {
    this.loggedIn.set(false);
    localStorage.removeItem('auth');
  }

  isLoggedIn() {
    return this.loggedIn();
  }
  /*
    Without localStorage persistence, guard won’t work properly after refresh.
  */
  constructor() {
    const stored = localStorage.getItem('auth');
    if (stored === 'true') {
      this.loggedIn.set(true);
    }
  }

  setLoginState(state: boolean) {
    this.loggedIn.set(state);
    if (state) localStorage.setItem('auth', 'true');
    else localStorage.removeItem('auth');
  }
}
