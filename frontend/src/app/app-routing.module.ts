import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
<<<<<<< HEAD
  
  {
  path: 'login',
  component: LoginComponent
  },

=======
>>>>>>> d6457f613ce3f7fa9c2022371f19561460cca98d
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
    title: 'Transferencias'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
