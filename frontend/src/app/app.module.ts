import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
=======
import { AuthModule } from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
>>>>>>> 364f40287c06f9dc3e7c2db42f230a6c2d6c083d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    RegisterComponent
=======
>>>>>>> 364f40287c06f9dc3e7c2db42f230a6c2d6c083d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
