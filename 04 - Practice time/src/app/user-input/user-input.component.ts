import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvest?: number;
  annualInvest?:number;
  expectedReturn?:number;
  duration?:number;


  onSubmit(){
    alert(`${this.initialInvest} i ${this.annualInvest} i ${this.expectedReturn} i ${this.duration}`);
  }
}
