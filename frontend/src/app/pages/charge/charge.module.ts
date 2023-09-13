import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChargeRoutingModule} from './charge-routing.module';
import { ByTransfersComponent } from './pages/by-transfers/by-transfers.component';
import { RouterModule } from '@angular/router';
import { TransfersComponent } from './transfers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ByCashComponent } from './pages/by-cash/by-cash.component';
import { MercadoPagoComponent } from './pages/by-transfers/mercado-pago/mercado-pago.component';
import { ConfirmComponent } from './pages/by-transfers/confirm/confirm.component';
import { ConsignComponent } from './pages/by-cash/consign/consign.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ByTransfersComponent,
    TransfersComponent,
    ByCashComponent,
    MercadoPagoComponent,
    ConfirmComponent,
    ConsignComponent
  ],
  imports: [
    CommonModule,
    ChargeRoutingModule,
    RouterModule,
    FontAwesomeModule,FormsModule
  ]
})
export class ChargeModule { }
