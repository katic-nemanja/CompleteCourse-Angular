import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {

  accounts: Array<{ name: string, status: string }> = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

  onAccountAdded(data: { name: string, status: string }) {
    this.accountService.AddAccount(data);

  }


  onStatusChanged(data: { id: any, newStatus: any }) {
    this.accountService.updateStatus(data);
  }
}
