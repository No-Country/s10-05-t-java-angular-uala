import { Component } from '@angular/core';
import { faHouse, faDollarSign, faArrowRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

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

  user = {
    name: 'Federico',
    lastname: 'Burgos',
    balance: 365400
  }

}
