import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { calculateInvestmentResults } from './investment-results/investment-results.service';
import { Result } from './shared/result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isResultVisible = false;
  rezultatZaPrikaz!: Array<Result>;

  izracunaj = calculateInvestmentResults;


  isVisibleTrue(newStatus: boolean) {
    this.isResultVisible = newStatus;
  }

  izracunajRezultat(rez: Array<Result>) {
    this.rezultatZaPrikaz = rez;
  }
}
