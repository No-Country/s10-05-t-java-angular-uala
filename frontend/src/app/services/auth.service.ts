import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)

  login(credentials: any) {
    return this.http.post('https://uala-no-country.onrender.com/v1/api/auth/login', credentials);
  }
  getInfoUser(){
    return this.http.get('https://uala-no-country.onrender.com/v1/api/auth/infoUser');
  }
}
