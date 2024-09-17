import { Component, Input } from "@angular/core";
import { NgIf, NgClass } from "@angular/common";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrl: './server.component.css',
}
)

export class ServerComponent {
    serverID!: string;
    serverStatus!: string;
    @Input() serverName !:string;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
        this.serverID = 'Server ' + Math.floor((Math.random() * 100));
    }

    getColor() {
        return this.serverStatus === 'online' ? 'lightseagreen' : 'lightcoral';
    }
}