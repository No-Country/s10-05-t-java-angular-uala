import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import { StringInitialPipe } from 'src/app/pipes/string-initial.pipe';


@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    StringInitialPipe
  ],
  host: { 'class': 'flex flex-grow' }
})
export class TradeComponent {

  faPlus = faPlus;
  faMagnifyingGlass = faMagnifyingGlass;
  faHeart = faHeart;
  faTrash = faTrash;

  user = {
    name: 'Federico',
    lastname: 'Burgos',
    balance: 365400,
    contacts: [
      {
        name: 'Jimena',
        lastname: 'Santiago',
        alias: 'jimena.santiago.uala',
        img: ''
      },
      {
        name: 'Matias',
        lastname: 'Balduzzi',
        alias: 'matias.balduzzi.uala',
        img: 'https://pbs.twimg.com/media/FwqKZD2WIAArXLV.png'
      }
    ],
    expenses: [
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
    ]
  }

}
