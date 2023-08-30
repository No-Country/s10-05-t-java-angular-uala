import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StringInitialPipe } from './pipes/string-initial.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StringInitialPipe,
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
