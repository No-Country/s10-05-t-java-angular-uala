import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioInter } from 'src/app/interface/servicioInter';
import { PagosServiceService } from 'src/app/services/pagos-service.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit{
  servicioInter: ServicioInter={
    serviceType: "",
    noService: ""
  }
  servicioConfirm: String[]=[]
  constructor(private servicio: PagosServiceService, private router : Router) {}

  ngOnInit(): void {
    let datos: String[] = this.servicio.get_Envio();
    this.servicioInter={
      serviceType: datos[0],
      noService: datos[1]
    }
    
    if(this.servicioInter.serviceType!=undefined){
      this.servicio.findService(this.servicioInter).subscribe(data =>{
        this.servicioInter=data;
      })
    }else{
      this.router.navigateByUrl(`main/pagar`)
    }
    
    
  }
  confirmar(){
      this.servicio.saveServicePayment(this.servicioInter).subscribe(response=>{
        console.log(response.status);
        if (response.status==200) {
          this.router.navigateByUrl(`main/pagar/confirmacion`)
        }
      })
      
      
      
  }

}
