import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCircleCheck, faCopy } from '@fortawesome/free-regular-svg-icons';
import { ChargeCashService } from 'src/app/services/charge-cash.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consign',
  templateUrl: './consign.component.html',
  styleUrls: ['./consign.component.css']
})
export class ConsignComponent {
  faCopy=faCopy;
 faCircleCheck= faCircleCheck;

 public monto:number=0;
 public entity:string="";
 public paymentMethod:string=""
 activateRoute=inject(ActivatedRoute);
 private chargeCashService = inject(ChargeCashService)
 constructor(){
  this.activateRoute.params.subscribe((param)=>{
    this.entity = param['entity'];
    console.log(this.entity);

    });
 }
 chargeMoney()
 {
  if(this.entity=="rapipago"){
    this.paymentMethod="RAPIPAGO";
  }
  else if(this.entity=="pago facil"){
    this.paymentMethod="PAGO_FACIL";
  }
  else  if(this.entity=="pago 24"){
    this.paymentMethod="PAGO_24";
  }
  else if(this.entity=="cobro express"){
    this.paymentMethod="COBRO_EXPRESS";
  }
  if(this.monto>300){
    const body={
      paymentMethods:this.paymentMethod,
      cashAmount:this.monto
    }
    Swal.fire({
      title: 'Loading',

      didOpen: () => {
        Swal.showLoading();
      },
    });
    this.chargeCashService.chargeCash(body).subscribe(resp=>{
      Swal.close();
      Swal.fire("success","Dinero cargado","success");
      console.log(resp);

    })

  }else{
    Swal.fire("error","El monto debe ser mayor a 300","error");

  }


 }
}
