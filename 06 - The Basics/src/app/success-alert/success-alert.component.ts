import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css'
})
export class SuccessAlertComponent {
  isVisible: boolean= true;
}
