import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowTrendUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  host: {'class': 'flex flex-grow'}
})
export class HomeComponent {

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faArrowTrendUp = faArrowTrendUp;
  faMagnifyingGlass = faMagnifyingGlass;

  balanceVisibility: boolean = false;

  user = {
    name: 'Federico',
    lastname: 'Burgos',
    balance: 365400
  }

  toggleBalanceVisibility() {
    this.balanceVisibility = !this.balanceVisibility;
  }


}