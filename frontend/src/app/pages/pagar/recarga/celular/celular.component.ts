import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagosServiceService } from 'src/app/services/pagos-service.service';

@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.css']
})
export class CelularComponent {
  opciones: any = [
    { name: "Opcion 1", costo: 50, GB: 10, id: "plan1" },
    { name: "Opcion 2", costo: 100, GB: 50, id: "plan2" }
  ]

  descripcionRecarga: any = {
    empresa: "",
    noService: "",
    price: 0
  }

  empresa: String = "";
  seleccionado: String = "";
  noServicio: String = "";

  constructor(private servicio: PagosServiceService, private route: Router) { }

  ngOnInit(): void {
    this.empresa = this.servicio.get_empresa()
    if (this.empresa == "") {
      this.route.navigateByUrl(`/main/pagar/recarga`)
    }
  }

  radioChangeHandler(event: any) {
    this.seleccionado = event.target.value
  }

  confirmar() {
    if (this.noServicio != "" && this.seleccionado != "") {
      this.descripcionRecarga.empresa = this.empresa
      this.descripcionRecarga.noService = this.noServicio
      if (this.seleccionado == "Opcion 2") {
        this.descripcionRecarga.price = 100;
      } else if (this.seleccionado == "Opcion 1") {
        this.descripcionRecarga.price = 50;
      }
      this.servicio.saveRechargeService(this.descripcionRecarga).subscribe(response=>{
        if (response.status!=400) {
          this.route.navigateByUrl(`/main/pagar/exitoso`)
        }
      })
      
      
    }



    //main/pagar/exitoso
  }
}
