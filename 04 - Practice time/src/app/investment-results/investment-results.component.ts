import { Component, Input, signal, input } from '@angular/core';
import { Result } from '../shared/result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // @Input({ required: true }) rezultat?: Array<Result>;

  rezultat = input <Array<Result>>();
}
