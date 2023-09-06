import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagarRoutingModule } from './pagar-routing.module';
import { ServicioComponent } from './servicio/servicio.component';
import { RouterModule } from '@angular/router';
import { RecargaComponent } from './recarga/recarga.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExitosoComponent } from './recarga/exitoso/exitoso.component';
import { CelularComponent } from './recarga/celular/celular.component';
import { PasswordComponent } from './recarga/password/password.component';
import { ClaveComponent } from './servicio/clave/clave.component';
import { ConfirmacionComponent } from './servicio/confirmacion/confirmacion.component';
import { PagoComponent } from './servicio/pago/pago.component';
import { PagarComponent } from './pagar.component';


@NgModule({
  declarations: [
    ServicioComponent,
    RecargaComponent,
    ExitosoComponent,
    CelularComponent,
    PasswordComponent,
    ClaveComponent,
    ConfirmacionComponent,
    PagoComponent,
    PagarComponent
  ],
  imports: [
    CommonModule,
    PagarRoutingModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class PagarModule { }