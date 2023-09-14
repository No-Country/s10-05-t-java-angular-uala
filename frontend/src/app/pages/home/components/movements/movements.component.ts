import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { PagosServiceService } from 'src/app/services/pagos-service.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css'],
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ]
})
export class MovementsComponent implements OnInit, OnDestroy {

  faMagnifyingGlass = faMagnifyingGlass;
  faDollarSign = faDollarSign;

  loading: boolean = true;
  error: boolean = false;

  modelo: any = undefined;
  modeloSubscription: Subscription | undefined;

  constructor(private pagosService:PagosServiceService) {}

  ngOnInit(): void {
    this.modeloSubscription = this.pagosService.findHistory().subscribe({
      next: (res) => {
        this.modelo = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = true;
      }
    });
  }

  ngOnDestroy(): void {
      this.modeloSubscription?.unsubscribe();
  }

}
