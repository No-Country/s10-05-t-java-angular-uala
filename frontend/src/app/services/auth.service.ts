import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLogged: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private http: HttpClient
  ) {}

  getIsUserLogged() {
    return this.isUserLogged.asObservable();
  }

  setIsUserLogged(value?: boolean) {
    if (localStorage.getItem('token')) {
      this.isUserLogged.next(true); 
    } else if (value) {
      this.isUserLogged.next(value);
    } else {
      this.isUserLogged.next(false);
    }
  }

  login(credentials: any) {
    return this.http.post('https://uala-no-country.onrender.com/v1/api/auth/login', credentials);
  }
}
