import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
const base_url = BASE_URL;
@Injectable({
  providedIn: 'root'
})
export class ChargeCashService {

  http = inject(HttpClient)



  chargeCash(body: any) {
    console.log(body);

    return this.http.post(`${base_url}/payment/method`, body);
  }
}
