import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    title: 'Ualá'
  },
  {
    path: 'transfers',
    loadChildren: () => import('./pages/transfers/transfers.module').then(m => m.TransfersModule),
    title: 'Cargar dinero'
  },
  {
    path: 'trade',
    loadComponent: () => import('./pages/trade/trade.component').then(c => c.TradeComponent),
    title: 'Transferencias'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
