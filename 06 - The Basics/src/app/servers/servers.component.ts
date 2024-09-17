import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = true;
  isServerCreated: boolean = false;
  serverName: string = 'Test 1';

  servers = ['Server 1', 'Server 2', 'Server 3'];


  constructor() {
    setTimeout(() => {
      alert("Sada je moguce dodati novi server!");
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }
  ngOnInit(): void {

  }

  onServerCreation() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
  }

  onServerUpdate(event: any) {
    this.serverName = event.target.value;
  }
}
