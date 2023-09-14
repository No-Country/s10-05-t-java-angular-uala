import { Component } from '@angular/core';

@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.css']
})
export class CelularComponent {
  opciones: any=[
    {name: "Opcion 1", costo : 50, GB:10, id:"plan1"},
    {name: "Opcion 2", costo : 100, GB:50, id:"plan2"}
  ]
  seleccionado:String="";
  radioChangeHandler(event:any ){
    this.seleccionado=event.target.value
  }

  confirmar(){
    if (this.seleccionado=="Opcion 2") {

    }else if (this.seleccionado=="Opcion 1") {
      
    }
    
    //main/pagar/exitoso
  }
}
