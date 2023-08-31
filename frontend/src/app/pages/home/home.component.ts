import { Component } from '@angular/core';
import { BankingComponent } from './components/banking/banking.component';
import { MovementsComponent } from './components/movements/movements.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

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
export class HomeComponent {

  user = {
    name: 'Federico',
    lastname: 'Burgos',
    balance: 365400,
    expenses: [
      {
        name: 'Servicios y débitos automáticos',
        value: 7000
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

}