import { Component, Input, OnInit } from '@angular/core';
import { faArrowTrendUp, faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faClone, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class BankingComponent {

  @Input() user: any = {}


  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faArrowTrendUp = faArrowTrendUp;
  faXmark = faXmark;
  faClone = faClone;
  faCircleExclamation = faCircleExclamation;

  balanceVisibility: boolean = false;

  toggleBalanceVisibility() {
    this.balanceVisibility = !this.balanceVisibility;
  }

  showAliasModal() {
    let dialog = document.getElementById('alias-dialog');
    // @ts-ignore
    dialog?.showModal();
  }

  closeAliasModal() {
    let dialog = document.getElementById('alias-dialog');
    // @ts-ignore
    dialog?.close();
  }

}
