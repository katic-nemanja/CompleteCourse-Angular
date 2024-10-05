import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>();


  onAddServer(serverName:HTMLInputElement) {
    console.log(serverName.value);
    this.serverCreated.emit({name:serverName.value, content:this.newServerContent});
  }

  onAddBlueprint(serverName:HTMLInputElement) {
    this.blueprintCreated.emit({name:serverName.value, content:this.newServerContent});
  }
}
