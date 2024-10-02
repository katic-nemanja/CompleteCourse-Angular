import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  serverElements: any = [];
  newServerName = '';
  newServerContent = '';

  @Output() lista = new EventEmitter<{ type: string, name: string, content: string }>;


  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
    this.lista.emit(this.serverElements);
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
    this.lista.emit(this.serverElements);
  }
}
