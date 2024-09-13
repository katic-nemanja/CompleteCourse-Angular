import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;

  constructor() {
    setTimeout(() => {
      alert("Sada je moguce dodati novi server!");
      this.allowNewServer = false
    }, 5000);
  }
  ngOnInit(): void {

  }

}
