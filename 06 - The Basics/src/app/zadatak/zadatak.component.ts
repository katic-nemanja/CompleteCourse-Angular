import { Component } from '@angular/core';

@Component({
  selector: 'app-zadatak',
  templateUrl: './zadatak.component.html',
  styleUrl: './zadatak.component.css'
})
export class ZadatakComponent {
  userName:string = '';


  onBtnClick(){
    this.userName = '';
  }
}
