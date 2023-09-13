import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagosServiceService } from 'src/app/services/pagos-service.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {
   opciones: String[]=["Gas Natural","Agua-Acueducto","Energía Codensa","Telefonía", "Claro Hogar"]
   seleccionado:String="";
   noServicio:String="";

  constructor(private service: PagosServiceService, private router : Router) {
    
  }
 
  buscar(){
    
    if(this.seleccionado!="" && this.noServicio!=""){
      this.service.agregardato(this.seleccionado, this.noServicio);
      this.router.navigateByUrl(`main/pagar/pago`)
    }
    
    
  }
}
