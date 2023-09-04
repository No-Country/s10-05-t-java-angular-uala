import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [loginGuard]
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main.component').then(c => c.MainComponent),
    title: 'Ualá',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
        title: 'Ualá'
      },
      {
        path: 'charge',
        loadChildren: () => import('./pages/charge/charge.module').then(m => m.ChargeModule),
        title: 'Cargar dinero'
      },
      {
        path: 'trade',
        loadComponent: () => import('./pages/trade/trade.component').then(c => c.TradeComponent),
        title: 'Transferencias'
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
