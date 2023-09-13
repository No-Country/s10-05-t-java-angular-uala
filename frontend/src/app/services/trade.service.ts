import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  formStep: BehaviorSubject<number> = new BehaviorSubject(0);

  setFormStep(value: number) {
    this.formStep.next(value);
  }

  getFormStep() {
    return this.formStep.asObservable();
  }

  submitTrade(trade: any) {
    console.log(trade);
  }

}
