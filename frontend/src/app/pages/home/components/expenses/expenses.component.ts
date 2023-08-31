import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TotalExpensesPipe } from 'src/app/pipes/total-expenses.pipe';
import { faBagShopping, faCar, faCartShopping, faDeleteLeft, faFileLines, faPersonWalking, faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgxChartsModule,
    TotalExpensesPipe
  ]
})
export class ExpensesComponent {

  @Input() data: any;

  faFileLines = faFileLines;
  faBagShopping = faBagShopping;
  faDeleteLeft = faDeleteLeft;
  faCartShopping = faCartShopping;
  faUtensils = faUtensils;
  faPersonWalking = faPersonWalking;
  faCar = faCar;
  
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
