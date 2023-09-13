import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { TradeService } from 'src/app/services/trade.service';

@Component({
  selector: 'app-trade-form',
  templateUrl: './trade-form.component.html',
  styleUrls: ['./trade-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class TradeFormComponent implements OnInit {

  faCircleCheck = faCircleCheck;

  tradeService = inject(TradeService);
  formBuilder= inject(FormBuilder);

  formStep: number = 0;

  tradeFinished: boolean = false;

  tradeForm: FormGroup = new FormGroup({});

  destiny: any = {
    name: 'Carlos',
    lastname: 'Peralta',
    cvu: 22045687567,
    alias: 'carlos.uala.623'
  };

  user = {
    name: 'Federico',
    lastname: 'Burgos',
    balance: 365400,
    contacts: [
      {
        name: 'Jimena',
        lastname: 'Santiago',
        alias: 'jimena.santiago.uala',
        img: ''
      },
      {
        name: 'Matias',
        lastname: 'Balduzzi',
        alias: 'matias.balduzzi.uala',
        img: 'https://pbs.twimg.com/media/FwqKZD2WIAArXLV.png'
      }
    ],
    expenses: [
      {
        name: 'Servicios y débitos automáticos',
        value: 7000
      },
      {
        name: 'Compras',
        value: 5000
      },
      {
        name: 'Otros',
        value: 3000
      },
      {
        name: 'Supermercados y alimentos',
        value: 1900
      },
      {
        name: 'Restaurantes y bares',
        value: 1500
      },
      {
        name: 'Salud y deportes',
        value: 1200
      },
      {
        name: 'Transporte y auto',
        value: 1200
      }
    ]
  }

  ngOnInit(): void {
    this.tradeForm = this.formBuilder.group(
      {
        cvuOrAlias: ['', Validators.required],
        mount: ['', [Validators.required, Validators.min(1), Validators.max(this.user.balance)]],
        motive: ['', Validators.required]
      }
    )
    this.tradeService.getFormStep().subscribe({
      next: (res) => {
        this.formStep = res;
      }
    });
  }

  increaseStep() {
    this.tradeService.setFormStep(this.formStep + 1);
  }

  refresh() {
    location.reload();
  }

  submitTrade() {
    this.increaseStep();
    this.tradeService.submitTrade(this.tradeForm.getRawValue());
    this.tradeFinished = true;
  }

}
