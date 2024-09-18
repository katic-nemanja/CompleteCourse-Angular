import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { ZadatakComponent } from './zadatak/zadatak.component';
import { Zadatak2Component } from './zadatak2/zadatak2.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ZadatakComponent,
    Zadatak2Component
  ],
  imports: [
    BrowserModule, FormsModule, DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
