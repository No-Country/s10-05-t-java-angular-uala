import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  userInfo: BehaviorSubject<any> = new BehaviorSubject(undefined);

  login(credentials: any) {
    return this.http.post('https://uala-no-country.onrender.com/v1/api/auth/login', credentials);
  }

  getUserInfo() {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    this.http.get('https://uala-no-country.onrender.com/v1/api/auth/infoUser', options).subscribe({
      next: (res) => {
        this.userInfo.next(res);
      },
      error: (err) => {
        if (err.status == 400) {
          localStorage.clear();
          location.reload();
        }
      }
    });
  }

  getUserInfoObservable() {
    return this.userInfo.asObservable();
  }

}