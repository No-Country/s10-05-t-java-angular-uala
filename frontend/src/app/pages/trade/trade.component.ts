import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import { StringInitialPipe } from 'src/app/pipes/string-initial.pipe';
import { TradeFormComponent } from './components/trade-form/trade-form.component';
import { TradeService } from 'src/app/services/trade.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    StringInitialPipe,
    TradeFormComponent
  ],
  host: { 'class': 'flex flex-grow' }
})
export class TradeComponent implements OnInit, OnDestroy {

  tradeService = inject(TradeService);

  faPlus = faPlus;
  faMagnifyingGlass = faMagnifyingGlass;
  faHeart = faHeart;
  faTrash = faTrash;

  formStep: number = 0;
  formStepSubscription: Subscription | undefined;
  userContacts: any;
  userContactsSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.formStepSubscription = this.tradeService.getFormStep().subscribe({
      next: (res) => {
        this.formStep = res;
      }
    });
    this.userContactsSubscription = this.tradeService.getUserContacts().subscribe({
      next: (res) => {
        this.userContacts = res;
      }
    });
  }

  setTransferDestiny(contact: any) {
    this.tradeService.setTransferDestiny(contact);
  }

  setFormStep(value: number) {
    this.tradeService.setFormStep(value);
  }

  ngOnDestroy(): void {
    this.tradeService.setFormStep(0);
    this.formStepSubscription?.unsubscribe();
    this.userContactsSubscription?.unsubscribe();
  }

}
