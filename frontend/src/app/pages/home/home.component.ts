import { Component, inject, OnInit } from '@angular/core';
import { BankingComponent } from './components/banking/banking.component';
import { MovementsComponent } from './components/movements/movements.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { AuthService } from '../../services/auth.service';
import { PagosServiceService } from 'src/app/services/pagos-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    BankingComponent,
    MovementsComponent,
    ExpensesComponent,
    FormsModule
  ],
  host: {'class': 'flex flex-grow'}
})
export class HomeComponent implements OnInit {
  public name!:string;
  public balance :number=0;
  public user:any;
  public balanceServicios?:number;
  public authService=inject(AuthService);

  constructor(private serviciosPago : PagosServiceService){

  }

  ngOnInit(): void {
    this.serviciosPago.findbalance().subscribe((data:any)=>this.balance=data)
    console.log(this.balance);
    
    this.authService.getInfoUser().subscribe((userInfo:any)=>{
      this.name = userInfo.name;
      this.balance = userInfo.balance;
      console.log(userInfo.cbu);
      this.user = {
        name:this.name,
        lastname: 'Burgos',
        cvu:userInfo.cbu,
        balance: this.balance,
        expenses: [
          {
            name: 'Servicios y débitos automáticos',
            value: 700
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
