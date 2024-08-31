import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import {dummyTasks} from '../dummy-tasks';
import { type Task } from './task/task.model';
import { isNgTemplate } from '@angular/compiler';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  rndZadaci = dummyTasks;
  // izdvojeniZadaci!: Array<Task>;
  @Input({required:true}) imeZaPrikaz!:string;
  @Input({required:true}) id!:string;

  vidljivo = false;

  // dependency injection - ovo je kod koji govori Angularu da je tasksService potreban za dependency injection, sto znaci da ako u jednoj komponenti instanciram klasu koja je zaduzena
  // za deljenje nekih podataka, ako tu istu klasu instanciram u drugoj komponenti, komponente nece znaci za promene koje su same izvrsile na toj klasi, vec ce te promene biti 
  // vidljive samo unutar klase koja ih je napravila. Dependency injection je tehnika koja prepusta instanciranje Angularu koji ce dalje da deli tu jednu instancu komponentama koje 
  // zele da je koriste, sto bi na kraju dovelo do toga da svaka od njih zna za promenu koju je napravila druga klasa, bilo bi centralizovano
  constructor(private tasksService:TasksService){}

  get zadatakUsera(){
    return this.tasksService.getUserTasks(this.id);
    // this.izdvojeniZadaci = this.rndZadaci.filter(item=>item.userId===this.id);
    // return this.rndZadaci.filter(item=>item.userId===this.id);
    // return this.izdvojeniZadaci;
  }



  promeniVidljivost(){
    this.vidljivo = true;
  }

  onVisibleOff(state:boolean){
    this.vidljivo = state;
  }
}