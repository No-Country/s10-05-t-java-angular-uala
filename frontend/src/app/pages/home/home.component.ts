import { Component, inject, OnInit } from '@angular/core';
import { BankingComponent } from './components/banking/banking.component';
import { MovementsComponent } from './components/movements/movements.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { AuthService } from '../../services/auth.service';
import { PagosServiceService } from 'src/app/services/pagos-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    BankingComponent,
    MovementsComponent,
    ExpensesComponent
  ],
  host: {'class': 'flex flex-grow'}
})
export class HomeComponent implements OnInit {
  public name!:string;
  public balance !:number;
  public user:any;
  public balanceServicios?:number;
  public authService=inject(AuthService);

  constructor(private serviciosPago : PagosServiceService){

  }

  ngOnInit(): void {
    this.serviciosPago.findbalance().subscribe(data=>{
      this.balanceServicios=data;
    })
    
    this.authService.getInfoUser().subscribe((userInfo:any)=>{
      this.name = userInfo.name;
      this.balance = userInfo.balance;
      console.log(userInfo.cbu);
      this.serviciosPago.findbalance().subscribe(data=>{
        this.balanceServicios=data
        console.log(this.balanceServicios);
        
      })
      this.user = {
        name:this.name,
        lastname: 'Burgos',
        cvu:userInfo.cbu,
        balance: this.balance,
        expenses: [
          {
            name: 'Servicios y débitos automáticos',
            value: this.balanceServicios
          },
          {
            name: 'Compras',
            value: 5000
          },
          {
            name: 'Otros',
            value: 3000
          },
          {
            name: 'Supermercados y alimentos',
            value: 1900
          },
          {
            name: 'Restaurantes y bares',
            value: 1500
          },
          {
            name: 'Salud y deportes',
            value: 1200
          },
          {
            name: 'Transporte y auto',
            value: 1200
          }
        ]
      }

    })
  }



}
