import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicioComponent } from './servicio/servicio.component';
import { RecargaComponent } from './recarga/recarga.component';
import { ExitosoComponent } from './recarga/exitoso/exitoso.component';
import { CelularComponent } from './recarga/celular/celular.component';
// import { PasswordComponent } from './recarga/password/password.component';
// import { ClaveComponent } from './servicio/clave/clave.component';
import { ConfirmacionComponent } from './servicio/confirmacion/confirmacion.component';
import { PagoComponent } from './servicio/pago/pago.component';
import { PagarComponent } from './pagar.component';

const routes: Routes = [
  {
    path:'', component: PagarComponent,
    children:[
      {path:'',component:ServicioComponent},
      {path:'pago',component: PagoComponent},
      // {path:'clave',component:ClaveComponent},
      {path:'confirmacion',component:ConfirmacionComponent},
      {path:'recarga',component:RecargaComponent},
      {path:'celular',component:CelularComponent},
      // {path:'password',component:PasswordComponent},
      {path:'exitoso',component:ExitosoComponent},
      
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagarRoutingModule { }