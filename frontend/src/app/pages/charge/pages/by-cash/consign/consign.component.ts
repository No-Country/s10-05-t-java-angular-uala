import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCircleCheck, faCopy } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-consign',
  templateUrl: './consign.component.html',
  styleUrls: ['./consign.component.css']
})
export class ConsignComponent {
  faCopy=faCopy;
 faCircleCheck= faCircleCheck;
 public entity:string="";
 activateRoute=inject(ActivatedRoute);
 constructor(){
  this.activateRoute.params.subscribe((param)=>{
    this.entity = param['entity'];
    console.log(this.entity);

    });
 }
}
