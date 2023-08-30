import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css'],

})
export class TransfersComponent {
  private router= inject(Router);
  statePage:boolean=true;
  changePage(path:string){
    console.log(path);
    if(path=="byTransfer"){
      this.router.navigateByUrl(`/transfers`)
      this.statePage=true;
    }
    else if(path=="byCash"){
      this.router.navigateByUrl(`/transfers/${path}`)
      this.statePage=false  ;
    }




  }

}
