import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransfersComponent } from './transfers.component';
import { ByTransfersComponent } from './pages/by-transfers/by-transfers.component';
import { ByCashComponent } from './pages/by-cash/by-cash.component';
import { MercadoPagoComponent } from './pages/by-transfers/mercado-pago/mercado-pago.component';
import { ConfirmComponent } from './pages/by-transfers/confirm/confirm.component';
import { ConsignComponent } from './pages/by-cash/consign/consign.component';

const routes: Routes = [
  {
    path:'',component : TransfersComponent,
    children:[
      {path:'',component:ByTransfersComponent},
      {path:'mPago',component:MercadoPagoComponent},
      {path:'confirm',component:ConfirmComponent},
      {path:'byCash',component:ByCashComponent},
      {path:'consign/:entity',component:ConsignComponent},


      ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargeRoutingModule { }
