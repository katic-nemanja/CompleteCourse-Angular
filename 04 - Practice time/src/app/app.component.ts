import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentResult } from './investment-results/investment-results.service';
import { Result } from './shared/result.model';
import { InputData } from './shared/result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isResultVisible = false;
  rezultatZaPrikaz = inject(InvestmentResult);
  
  
  // rezultatZaPrikaz!: Array<Result>;

  // rezultatZaPrikaz= signal<Array<Result>|undefined>(undefined);
  isVisibleTrue(newStatus: boolean) {
    this.isResultVisible = newStatus;
  }

  // klasican sistem za rad sa Input/Output varijablama 
  // dobijamUlaz(ulaz:InputData){
  //   this.rezultatZaPrikaz = calculateInvestmentResults(ulaz);
  // }

  // varijanta funkcije za rad sa Signalom
  // ovu funkciju ne koristim, jer sam ukinuo emitere
  // dobijamUlaz(ulaz:InputData){
  //   this.rezultatZaPrikaz.set(calculateInvestmentResults(ulaz));
  // }

  // get vratiRezultat(){
  //   return this.rezultatZaPrikaz.getResultData();
  // }
}
