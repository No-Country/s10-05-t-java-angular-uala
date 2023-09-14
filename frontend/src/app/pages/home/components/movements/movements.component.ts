import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { PagosServiceService } from 'src/app/services/pagos-service.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css'],
  standalone: true,
  imports: [
    FontAwesomeModule
  ]
})
export class MovementsComponent {
  constructor(private servicio:PagosServiceService){

  }

  modelo:any=undefined;

  faMagnifyingGlass = faMagnifyingGlass;
   ngOnInit(): void {
    this.servicio.findHistory().subscribe(data=>{
      this.modelo=data;
    })
   }

}
