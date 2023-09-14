import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
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
export class TradeFormComponent implements OnInit, OnDestroy {

  faCircleCheck = faCircleCheck;
  faCircleXmark = faCircleXmark;

  authService = inject(AuthService);
  tradeService = inject(TradeService);
  formBuilder= inject(FormBuilder);

  userInfo: any;
  userInfoSubscription: Subscription | undefined;
  
  formStep: number = 0;
  formStepSubscription: Subscription | undefined;

  transferDestiny: any;
  transferDestinySubscription: Subscription | undefined;
  
  tradeFinished: boolean = false;
  somethingWrong: boolean = false;

  tradeForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.setUserInfoSubscription();
    this.setFormStepSubscription();
    this.tradeForm = this.formBuilder.group(
      {
        valor: ['noche.frontend.pato.uala', Validators.required],
        cashAmount: ['', [Validators.required, Validators.min(1), Validators.max(this.userInfo.balance)]],
        Reason: ['', Validators.required],
        message: ['', Validators.required]
      }
    );
    this.setContactDestinySubscription();
  }

  setUserInfoSubscription() {
    this.userInfoSubscription = this.authService.getUserInfoObservable().subscribe({
      next: (res) => {
        this.userInfo = res;
      }
    });
  }

  setFormStepSubscription() {
    this.formStepSubscription = this.tradeService.getFormStep().subscribe({
      next: (res) => {
        this.formStep = res;
      }
    });
  }

  setContactDestinySubscription() {
    this.transferDestinySubscription = this.tradeService.getTransferDestiny().subscribe({
      next: (res) => {
        if (res) {
          this.transferDestiny = res;
          this.tradeForm.get('valor')?.setValue(this.transferDestiny.alias);
        }
      }
    });
  }

  increaseStep() {
    this.tradeService.setFormStep(this.formStep + 1);
  }

  findUser() {
    const filter = this.tradeForm.getRawValue().valor;
    this.tradeService.findUser(filter).subscribe({
      next: (res) => {
        console.log(res);
        this.transferDestiny = res;
        this.increaseStep()
      },
      error: (err) => {
        console.log(err);
        this.increaseStep()
      }
    });
  }

  resetTradeForm() {
    this.tradeService.setFormStep(0);
    this.tradeForm.reset();
  }

  submitTrade() {
    this.tradeService.submitTrade(this.tradeForm.getRawValue()).subscribe({
      next: (data) => {
        console.log(data);
        this.increaseStep();
        this.tradeFinished = true;
      },
      error: (err) => {
        console.log(err);
        this.increaseStep();
        this.somethingWrong = true;
      }
    });
    
  }

  ngOnDestroy(): void {
    this.userInfoSubscription?.unsubscribe();
    this.formStepSubscription?.unsubscribe();
    this.tradeService.setTransferDestiny(undefined);
    this.transferDestinySubscription?.unsubscribe();
  }

}
