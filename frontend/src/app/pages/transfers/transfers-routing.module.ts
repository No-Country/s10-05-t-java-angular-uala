import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransfersComponent } from './transfers.component';
import { ByTransfersComponent } from './pages/by-transfers/by-transfers.component';
import { ByCashComponent } from './pages/by-cash/by-cash.component';

const routes: Routes = [
  {
    path:'',component : TransfersComponent,
    children:[
      {path:'',component:ByTransfersComponent},
      {path:'byCash',component:ByCashComponent},
      ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule { }
