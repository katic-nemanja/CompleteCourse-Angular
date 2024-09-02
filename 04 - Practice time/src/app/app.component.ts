import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[HeaderComponent, UserInputComponent],
  styleUrl:'./app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {}
