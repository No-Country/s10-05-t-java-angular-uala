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
    ExpensesComponent,
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
    [
      {
        name: 'Servicios y débitos automáticos',
        value: 12560
      },
      {
        name: 'Compras',
        value: 60320
      },
      {
        name: 'Otros',
        value: 128450
      },
      {
        name: 'Supermercados y alimentos',
        value: 23900
      },
      {
        name: 'Restaurantes y bares',
        value: 16200
      },
      {
        name: 'Salud y deportes',
        value: 39900
      },
      {
        name: 'Transporte y auto',
        value: 15300
      }
    ],
    [
      {
        name: 'Servicios y débitos automáticos',
        value: 3540
      },
      {
        name: 'Compras',
        value: 12870
      },
      {
        name: 'Otros',
        value: 25000
      },
      {
        name: 'Supermercados y alimentos',
        value: 31050
      },
      {
        name: 'Restaurantes y bares',
        value: 67300
      },
      {
        name: 'Salud y deportes',
        value: 5200
      },
      {
        name: 'Transporte y auto',
        value: 2150
      }
    ],
    [
      {
        name: 'Servicios y débitos automáticos',
        value: 7600
      },
      {
        name: 'Compras',
        value: 5361
      },
      {
        name: 'Otros',
        value: 2830
      },
      {
        name: 'Supermercados y alimentos',
        value: 6150
      },
      {
        name: 'Restaurantes y bares',
        value: 3200
      },
      {
        name: 'Salud y deportes',
        value: 1790
      },
      {
        name: 'Transporte y auto',
        value: 530
      }
    ],
    [
      {
        name: 'Servicios y débitos automáticos',
        value: 65800
      },
      {
        name: 'Compras',
        value: 37100
      },
      {
        name: 'Otros',
        value: 4590
      },
      {
        name: 'Supermercados y alimentos',
        value: 28549
      },
      {
        name: 'Restaurantes y bares',
        value: 11600
      },
      {
        name: 'Salud y deportes',
        value: 74700
      },
      {
        name: 'Transporte y auto',
        value: 152600
      }
    ],
    [
      {
        name: 'Servicios y débitos automáticos',
        value: 3582
      },
      {
        name: 'Compras',
        value: 62385
      },
      {
        name: 'Otros',
        value: 9574
      },
      {
        name: 'Supermercados y alimentos',
        value: 19100
      },
      {
        name: 'Restaurantes y bares',
        value: 89729
      },
      {
        name: 'Salud y deportes',
        value: 9048
      },
      {
        name: 'Transporte y auto',
        value: 4978
      }
    ],
    [
      {
        name: 'Servicios y débitos automáticos',
        value: 28679
      },
      {
        name: 'Compras',
        value: 73409
      },
      {
        name: 'Otros',
        value: 2468
      },
      {
        name: 'Supermercados y alimentos',
        value: 8237
      },
      {
        name: 'Restaurantes y bares',
        value: 3774
      },
      {
        name: 'Salud y deportes',
        value: 3496
      },
      {
        name: 'Transporte y auto',
        value: 9662
      }
    ]
  ];

  ngOnDestroy(): void {
    this.userInfoSubscription?.unsubscribe();
  }



}
