import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthModule } from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TransferComponent } from './pages/recarga/transfer/transfer.component';
import { EfectivoComponent } from './pages/recarga/efectivo/efectivo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TransferComponent,
    EfectivoComponent,
import { AuthModule } from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StringInitialPipe } from './pipes/string-initial.pipe';
import { TotalExpensesPipe } from './pipes/total-expenses.pipe';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FontAwesomeModule,
    NgxChartsModule,
    StringInitialPipe,
    TotalExpensesPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
