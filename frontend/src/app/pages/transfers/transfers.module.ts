import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfersRoutingModule } from './transfers-routing.module';
import { ByTransfersComponent } from './pages/by-transfers/by-transfers.component';
import { RouterModule } from '@angular/router';
import { TransfersComponent } from './transfers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ByCashComponent } from './pages/by-cash/by-cash.component';


@NgModule({
  declarations: [
    ByTransfersComponent,
    TransfersComponent,
    ByCashComponent
  ],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class TransfersModule { }
