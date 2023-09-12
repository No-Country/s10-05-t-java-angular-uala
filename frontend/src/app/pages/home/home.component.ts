import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BankingComponent } from './components/banking/banking.component';
import { MovementsComponent } from './components/movements/movements.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

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
export class HomeComponent implements OnInit, OnDestroy {

  authService = inject(AuthService);
  userInfoSubscription: Subscription | undefined;

  userInfo: any;

  ngOnInit(): void {
    this.userInfoSubscription = this.authService.getUserInfoObservable().subscribe({
      next: (data) => {
        this.userInfo = data;
      }
    });
  }  

  expenses = [
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
  ];

  ngOnDestroy(): void {
    this.userInfoSubscription?.unsubscribe();
  }

}