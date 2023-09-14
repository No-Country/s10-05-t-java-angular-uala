import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  http = inject(HttpClient);

  formStep: BehaviorSubject<number> = new BehaviorSubject(0);
  transferDestiny: BehaviorSubject<any> = new BehaviorSubject(undefined);

  setFormStep(value: number) {
    this.formStep.next(value);
  }

  getFormStep() {
    return this.formStep.asObservable();
  }

  setTransferDestiny(value: any) {
    this.transferDestiny.next(value);
  }

  getTransferDestiny() {
    return this.transferDestiny.asObservable();
  }

  submitTrade(data: any) {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    return this.http.post('https://uala-no-country.onrender.com/v1/api/transfer/send', data, options);
  }

  getUserContacts() {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    return this.http.get('https://uala-no-country.onrender.com/v1/api/wallet/contact', options);
  }

  findUser(alias: string) {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const options = { headers: headers };
    return this.http.get(`https://uala-no-country.onrender.com/v1/api/transfer/serch-cbu-alias/${alias}`, options);
  }

}
