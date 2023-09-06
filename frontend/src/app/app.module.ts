import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthModule } from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StringInitialPipe } from './pipes/string-initial.pipe';
import { TotalExpensesPipe } from './pipes/total-expenses.pipe';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';


// import { PagarComponent } from './pages/pagar/pagar.component';
// import { ServicioComponent } from './pages/pagar/servicio/servicio.component';
// import { RecargaComponent } from './pages/pagar/recarga/recarga.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,


    // PagarComponent,
    // ServicioComponent,
    // RecargaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FontAwesomeModule,
    NgxChartsModule,
    StringInitialPipe,
    TotalExpensesPipe,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
