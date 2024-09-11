import { Component, Input } from "@angular/core";
import { NgIf, NgClass } from "@angular/common";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrl: './server.component.css',
}
)

export class ServerComponent {
    @Input({required:true}) serverID!:number;
    @Input({required:true}) serverStatus!:string;
}