import { Component, inject } from '@angular/core';
import { faHouse, faDollarSign, faArrowRightFromBracket, faArrowRightArrowLeft, faPlus, faArrowTrendUp, faCoins, faTags } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCircleQuestion, faCreditCard, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StringInitialPipe } from 'src/app/pipes/string-initial.pipe';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    StringInitialPipe,
    RouterModule
  ]
})
export class MainComponent {

  faHouse = faHouse;
  faDollarSign = faDollarSign;
  faArrowRightFromBracket = faArrowRightFromBracket;
  faBell = faBell;
  faCreditCard = faCreditCard;
  faArrowRightArrowLeft = faArrowRightArrowLeft;
  faPlus = faPlus;
  faArrowTrendUp = faArrowTrendUp;
  faCoins = faCoins;
  faThumbsUp = faThumbsUp;
  faTags = faTags;
  faCircleQuestion = faCircleQuestion;

  user = {
    name: 'Federico',
    lastname: 'Burgos',
    balance: 365400,
    img: ''
    // img: 'https://www.logiconme.com/assets/img-temp/400x450/img5.jpg'
  }

  router = inject(Router);

  logout() {
    localStorage.removeItem('token');
    location.reload();
  }

}
