import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userList = DUMMY_USERS;
  selectedUserId!:string;
  vidljivo!:boolean;
  imeKorisnika!:any;

  get selectedUser(){
    return this.userList.find(user=>user.id ===this.selectedUserId);
  }

  onClickedListItem(id:string){
    this.selectedUserId = id;
    // this.ImeZaTransport = this.userList.find(user=>user.id===id)?.name!;
  }
}