import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  login(credentials: any) {
    return this.http.post('https://uala-no-country.onrender.com/v1/api/auth/login', credentials);
  }
}
