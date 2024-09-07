import { Component, Output, EventEmitter, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculateInvestmentResults } from '../investment-results/investment-results.service';
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
  // initialInvest!: number;
  // annualInvest!: number;
  // expectedReturn!: number;
  // duration!: number;

  initialInvest= signal('0');
  annualInvest= signal('0');
  expectedReturn= signal('5');
  duration= signal('10');

  @Output() isVisible = new EventEmitter<boolean>;
  @Output() outRezultat = new EventEmitter<Array<Result>>();
  // klasican Output
  // @Output() ulazniPodaci = new EventEmitter<InputData>();
  // output Signal varijable
  ulazniPodaci = output<InputData>();
  

  resetInputa(){
    this.initialInvest.set('0');
    this.annualInvest.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }


  onSubmit() {
    // emit ostaje isti i za Output dekorator i za output funkciju za Signale
    this.ulazniPodaci.emit({initialInvest:+this.initialInvest(),annualInvest:+this.annualInvest(),duration:+this.duration(), expectedReturn:+this.expectedReturn()});
    // emit za klasican Output dekorator, jedina razlika je u zagradama za iscitavanje vrednosti Signal varijabli
    // this.ulazniPodaci.emit({initialInvest:+this.initialInvest,annualInvest:+this.annualInvest,duration:+this.duration, expectedReturn:+this.expectedReturn});
    this.isVisible.emit(true);
    this.resetInputa();
  }
}
