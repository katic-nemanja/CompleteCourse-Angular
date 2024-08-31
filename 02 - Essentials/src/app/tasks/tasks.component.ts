import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import {dummyTasks} from '../dummy-tasks';
import { type Task } from './task/task.model';
import { isNgTemplate } from '@angular/compiler';
import { AddTaskComponent } from './task/add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  rndZadaci = dummyTasks;
  izdvojeniZadaci!: Array<Task>;
  @Input({required:true}) imeZaPrikaz!:string;
  @Input({required:true}) id!:string;

  vidljivo = false;

  get zadatakUsera(){
    this.izdvojeniZadaci = this.rndZadaci.filter(item=>item.userId===this.id);
    // return this.rndZadaci.filter(item=>item.userId===this.id);
    return this.izdvojeniZadaci;
  }

  onTaskCompletion(id:string){
    this.rndZadaci = this.rndZadaci.filter(item=>item.id!==id);
  }

  promeniVidljivost(){
    this.vidljivo = true;
  }

  onVisibleOff(state:boolean){
    this.vidljivo = state;
  }
}
