import { Component, OnInit, inject } from '@angular/core';
import { faHouse, faDollarSign, faArrowRightFromBracket, faArrowRightArrowLeft, faPlus, faArrowTrendUp, faCoins, faTags, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCircleQuestion, faCreditCard, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
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
  imports: [
    CommonModule,
    FontAwesomeModule,
    StringInitialPipe,
    RouterModule
  ]
})
export class MainComponent implements OnInit {

  router = inject(Router);
  authService = inject(AuthService);

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
  faXmark = faXmark;
  faBars = faBars;

  userInfo: any;

  ngOnInit(): void {
    this.authService.getUserInfo();
    this.authService.getUserInfoObservable().subscribe({
      next: (data) => {
        this.userInfo = data;
      }
    });
  }  

  logout() {
    localStorage.removeItem('token');
    location.reload();
  }

  showSidebar() {
    let sidebar = document.getElementById('sidebar');
    // @ts-ignore
    sidebar?.showModal();
  }

  closeSidebar() {
    let sidebar = document.getElementById('sidebar');
    // @ts-ignore
    sidebar?.close();
  }

}
