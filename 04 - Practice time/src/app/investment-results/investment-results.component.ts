import { Component, Input } from '@angular/core';
import { Result } from '../shared/result.model';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [ResultComponent],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({ required: true }) rezultat!: Array<Result>;
}
