import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculateInvestmentResults } from '../investment-results/investment-results.service';
import { Result } from '../shared/result.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvest!: number;
  annualInvest!: number;
  expectedReturn!: number;
  duration!: number;

  @Output() isVisible = new EventEmitter<boolean>;
  @Output() outRezultat = new EventEmitter<Array<Result>>();


  onSubmit() {
    this.outRezultat.emit(calculateInvestmentResults(this.initialInvest, this.duration, this.expectedReturn, this.annualInvest));
    this.isVisible.emit(true);
  }
}
