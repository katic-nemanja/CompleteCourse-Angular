import { Component, Output, EventEmitter, signal, output, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResult } from '../investment-results/investment-results.service';
import { Result } from '../shared/result.model';
import { InputData } from '../shared/result.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // klasicne varijable
  // initialInvest!: number;
  // annualInvest!: number;
  // expectedReturn!: number;
  // duration!: number;

  private investmentService = inject(InvestmentResult);

  // Signal varijable
  initialInvest = signal('0');
  annualInvest = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  ulaz = signal<InputData>({
    initialInvest: 0,
    annualInvest: 0,
    expectedReturn: 5,
    duration: 10
  });


  // klasican Output
  // @Output() isVisible = new EventEmitter<boolean>;
  // @Output() ulazniPodaci = new EventEmitter<InputData>();
  // output Signal varijable
  ulazniPodaci = output<InputData>();
  isVisible = output<boolean>();


  resetInputa() {
    this.ulaz.set({
      initialInvest: 0,
      annualInvest: 0,
      expectedReturn: 5,
      duration: 10
    });
    // this.initialInvest.set('0');
    // this.annualInvest.set('0');
    // this.expectedReturn.set('5');
    // this.duration.set('10');
  }


  onSubmit() {

    // prelazak sa emita na kalkulaciju unutar servisa
    // this.investmentService.calculateInvestmentResults({ initialInvest: +this.initialInvest(), annualInvest: +this.annualInvest(), duration: +this.duration(), expectedReturn: +this.expectedReturn() });
    this.investmentService.calculateInvestmentResults(this.ulaz());
    // emit ostaje isti i za Output dekorator i za output funkciju za Signale
    //this.ulazniPodaci.emit({ initialInvest: +this.initialInvest(), annualInvest: +this.annualInvest(), duration: +this.duration(), expectedReturn: +this.expectedReturn() });
    // emit za klasican Output dekorator, jedina razlika je u zagradama za iscitavanje vrednosti Signal varijabli
    // this.ulazniPodaci.emit({initialInvest:+this.initialInvest,annualInvest:+this.annualInvest,duration:+this.duration, expectedReturn:+this.expectedReturn});
    this.isVisible.emit(true);
    this.resetInputa();
  }
}
