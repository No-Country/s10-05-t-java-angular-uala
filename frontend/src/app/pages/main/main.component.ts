import { Component, OnInit, inject } from '@angular/core';
import {
  faHouse,
  faDollarSign,
  faArrowRightFromBracket,
  faArrowRightArrowLeft,
  faPlus,
  faArrowTrendUp,
  faCoins,
  faTags,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faCircleQuestion,
  faCreditCard,
  faThumbsUp,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StringInitialPipe } from 'src/app/pipes/string-initial.pipe';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, StringInitialPipe, RouterModule],
})
export class MainComponent implements OnInit {

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
  public user!: any;

  private authService = inject(AuthService);
  router = inject(Router);
  ngOnInit(): void {
    this.authService.getInfoUser().subscribe((user) => {

        this.user = user;
        this.user.img="";
        console.log(this.user);

    });
  }
  logout() {
    localStorage.removeItem('token');
    location.reload();
  }
}
