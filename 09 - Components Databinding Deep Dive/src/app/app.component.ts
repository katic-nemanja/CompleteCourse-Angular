import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: any = [];



  onAdd(lista: Array<{ type: string, name: string, content: string }>) {
    this.serverElements = lista;
  }
}
