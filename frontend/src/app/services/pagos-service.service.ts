import { HttpClient } from '@angular/common/http';
import { ServicioInter } from '../interface/servicioInter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_API='http://localhost:8080/v1/api/service/payment/'
@Injectable({
  providedIn: 'root'
})

export class PagosServiceService {
 
  private _envio: String[]=[];
  constructor(private http: HttpClient) { }

  findService(modelo:any){
    return this.http.post<ServicioInter>(`${URL_API}calculate/bill`, modelo);
  }

  agregardato(dato:String, dato2:String){
    this._envio=[];
    this._envio.push(dato);
    this._envio.push(dato2);
  }

  get_Envio(){
    return this._envio;
  }

  saveServicePayment(servicio : ServicioInter): Observable<any>{
    return this.http.post<ServicioInter>(`${URL_API}confirm/service`, servicio, {observe: 'response'});
  }

}
