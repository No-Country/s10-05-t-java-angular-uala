import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowTrendUp, faBagShopping, faCar, faCartShopping, faCircleExclamation, faDeleteLeft, faFileLines, faInfo, faMagnifyingGlass, faPersonWalking, faUtensils, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faClone, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TotalExpensesPipe } from 'src/app/pipes/total-expenses.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgxChartsModule,
    TotalExpensesPipe
  ],
  host: {'class': 'flex flex-grow'}
})
export class HomeComponent {

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faArrowTrendUp = faArrowTrendUp;
  faMagnifyingGlass = faMagnifyingGlass;
  faFileLines = faFileLines;
  faBagShopping = faBagShopping;
  faDeleteLeft = faDeleteLeft;
  faCartShopping = faCartShopping;
  faUtensils = faUtensils;
  faPersonWalking = faPersonWalking;
  faCar = faCar;
  faXmark = faXmark;
  faClone = faClone;
  faCircleExclamation = faCircleExclamation;

  balanceVisibility: boolean = false;

  user = {
    name: 'Federico',
    lastname: 'Burgos',
    balance: 365400
  }

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

  data: any[] = [
    {
      name: 'Servicios y débitos automáticos',
      value: 7000
    },
    {
      name: 'Compras',
      value: 5000
    },
    {
      name: 'Otros',
      value: 3000
    },
    {
      name: 'Supermercados y alimentos',
      value: 1900
    },
    {
      name: 'Restaurantes y bares',
      value: 1500
    },
    {
      name: 'Salud y deportes',
      value: 1200
    },
    {
      name: 'Transporte y auto',
      value: 1200
    }
  ];

  gastos = [
    {
      icon: this.faFileLines,
      bgColor: 'bg-[#B0F0AA]',
    },
    {
      icon: this.faBagShopping,
      bgColor: 'bg-[#FF5874]',
    },
    {
      icon: this.faDeleteLeft,
      bgColor: 'bg-[#FFCF44]',
    },
    {
      icon: this.faCartShopping,
      bgColor: 'bg-[#FF9C00]',
    },
    {
      icon: this.faUtensils,
      bgColor: 'bg-[#FFA8F6]',
    },
    {
      icon: this.faPersonWalking,
      bgColor: 'bg-[#15CF74]',
    },
    {
      icon: this.faCar,
      bgColor: 'bg-[#00E3FF]',
    },
  ]

  customColors = [
    {
      name: 'Servicios y débitos automáticos',
      value: '#B0F0AA'
    },
    {
      name: 'Compras',
      value: '#FF5874'
    },
    {
      name: 'Otros',
      value: '#FFCF44'
    },
    {
      name: 'Supermercados y alimentos',
      value: '#FF9C00'
    },
    {
      name: 'Restaurantes y bares',
      value: '#FFA8F6'
    },
    {
      name: 'Salud y deportes',
      value: '#15CF74'
    },
    {
      name: 'Transporte y auto',
      value: '#00E3FF'
    }
  ];

}