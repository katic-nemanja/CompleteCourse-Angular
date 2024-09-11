import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-warning-alert',
  template: `
    <div *ngIf="isVisible" class="warning">
      <h3>Upozorenje!!!!</h3>
      <p>Uspesno prikazana warning-alert komponenta</p>
    </div>
  `,
  styles:`
    .warning{
      color:red;
    }
  `
})
export class WarningAlertComponent {

  isVisible:boolean = false;
}
