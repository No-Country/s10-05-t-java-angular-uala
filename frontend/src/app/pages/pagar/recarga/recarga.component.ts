import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagosServiceService } from 'src/app/services/pagos-service.service';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.css']
})
export class RecargaComponent {
  constructor(private servicio: PagosServiceService, private route: Router){

  }

  enviodeDatos(empresa: String){
    this.servicio.definirEmpresa(empresa);
    this.route.navigateByUrl(`/main/pagar/celular`)
  }
}
