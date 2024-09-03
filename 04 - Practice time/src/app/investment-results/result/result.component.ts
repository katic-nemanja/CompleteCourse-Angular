import { Component, Input } from '@angular/core';
import { Result } from '../../shared/result.model';
@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  @Input({ required: true }) rezultat!: Result;
}
