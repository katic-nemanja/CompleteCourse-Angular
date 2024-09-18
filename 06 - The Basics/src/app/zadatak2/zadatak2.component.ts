import { Component } from '@angular/core';

@Component({
  selector: 'app-zadatak2',
  templateUrl: './zadatak2.component.html',
  styleUrl: './zadatak2.component.css',
  styles: `
  .beliTekst{
    color:white;
  }
  `
})


// interface LogKlik {
//   vreme: string,
//   klik: number
// }

export class Zadatak2Component {
  isUkljuceno: boolean = true;

  noviElement!: { vreme: number, klik: number };
  clickLog: Array<{ vreme: number, klik: number }> = [];
  brojac: number = 1;
  // now!: Date;
  vreme: string = '';

  onUkljuciIskljuci() {
    this.isUkljuceno = !this.isUkljuceno;
    let now = Date.now();
    // this.vreme = this.now.getHours().toString() + ':' + this.now.getMinutes().toString();
    this.noviElement = { vreme: now, klik: this.brojac };
    this.clickLog.push({ vreme: now, klik: this.brojac });
    this.brojac++;
  }


}
