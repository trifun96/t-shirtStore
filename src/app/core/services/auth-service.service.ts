import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiService } from './api-service.service';
import { User } from 'src/app/shared/models/userInterface.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public registrationUser: any;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private userLoggedIn = new BehaviorSubject<boolean>(false)

  constructor(private router: Router, private api: ApiService) {
    const userFromStorage = localStorage.getItem('currentUser');
    if (userFromStorage) {
      this.currentUserSubject.next(JSON.parse(userFromStorage));
    }

    this.getRegistrationUsers();
  }

  setCurrentUser(user: User | null) {
    this.currentUserSubject.next(user);
  }

  getRegistrationUsers() {
    this.api.getRegistrationUser().subscribe((response) => {
      this.registrationUser = response;
      console.log(this.registrationUser);
    });
  }

  setToken(token: any): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    console.log(this.getToken(), 'aaa');
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.setCurrentUser(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['product-page'])
    this.userLoggedIn.next(false);
  }

  login({ email, password }: any): Observable<any> {
    this.userLoggedIn.next(true);
    if (email === 'admin123@gmail.com' && password === 'admin123') {
      const userToSave = { user: { email, password } };
      this.setCurrentUser(userToSave);

      localStorage.setItem('role', 'admin');
      this.setToken('adminLoggedOn');

      this.router.navigate(['admin/products']);
      return of('admin');
    }
    
    const user = this.registrationUser.find((user) => user.email === email);

    if (user && user.password === password) {
      const userToSave = { user: { email, password } };
      this.setCurrentUser(userToSave);

      this.setToken('userLoggedOn');
      localStorage.setItem('role', 'user');

      this.router.navigate(['product-page']);
      return of('user');
    }

    return of(null);
  }
}
