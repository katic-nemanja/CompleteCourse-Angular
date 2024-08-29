import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from '../task/task.component';
import {dummyTasks} from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  rndZadaci = dummyTasks;
  @Input({required:true}) imeZaPrikaz!:string;
  @Input({required:true}) id!:string;

  get zadatakUsera(){
    return this.rndZadaci.filter(item=>item.userId===this.id);
  }
}
