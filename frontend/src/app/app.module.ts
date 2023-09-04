import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthModule } from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
=======
import { AuthModule } from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StringInitialPipe } from './pipes/string-initial.pipe';
import { TotalExpensesPipe } from './pipes/total-expenses.pipe';


@NgModule({
  declarations: [
    AppComponent
>>>>>>> d6457f613ce3f7fa9c2022371f19561460cca98d
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
