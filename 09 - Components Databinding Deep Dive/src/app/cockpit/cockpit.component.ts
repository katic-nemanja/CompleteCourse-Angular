import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>();


  onAddServer(serverName: HTMLInputElement) {
    console.log(this.serverContentInput.nativeElement.value);
    // console.log(serverName.value);
    // this.serverCreated.emit({name:serverName.value, content:this.newServerContent});
    this.serverCreated.emit({ name: serverName.value, content: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    // this.blueprintCreated.emit({ name: serverName.value, content: this.newServerContent });
    this.blueprintCreated.emit({ name: serverName.value, content: this.serverContentInput.nativeElement.value });
  }
}
