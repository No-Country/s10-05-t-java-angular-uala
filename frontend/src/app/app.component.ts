import { Component } from '@angular/core';
import { faHouse, faDollarSign, faArrowRightFromBracket, faGear, faArrowRightArrowLeft, faPlus, faArrowTrendUp, faCoins, faTags } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCircleQuestion, faCreditCard, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'uala';

  userLogged: boolean = true;

  faHouse = faHouse;
  faDollarSign = faDollarSign;
  faGear = faGear;
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

}
