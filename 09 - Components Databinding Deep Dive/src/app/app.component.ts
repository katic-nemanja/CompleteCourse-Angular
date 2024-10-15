import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;
  serverElements: Array<{ type: string, name: string, content: string }> = [{ type: 'server', name: 'test', content: 'test' }];

  onServerCreated(server: { name: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: server.name,
      content: server.content
    });
  }


  onBluePrintCreated(blueprint: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprint.name,
      content: blueprint.content
    });
  }

  onChangeFirstElement() {
    this.serverElements[0].name = `Promenjeno ime ${this.counter} puta`;
    this.counter++;
  }

  onDeleteFirstElement() {
    this.serverElements.splice(0, 1);
  }

}
