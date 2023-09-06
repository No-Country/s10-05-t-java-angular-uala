import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent {
  private router= inject(Router);
  statePage:boolean=true;
  changePage(path:string){
    console.log(path);
    if(path=="servicio"){
      this.router.navigateByUrl(`/main/servicio`)
      this.statePage=true;
    }
    else if(path=="recarga"){
      this.router.navigateByUrl(`/main/recarga/${path}`)
      this.statePage=false  ;
    }

  }
}
