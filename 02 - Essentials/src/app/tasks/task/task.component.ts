import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) zadatak!: Task;

  private tasksService = inject(TasksService);

  onTaskCompleted(){
    this.tasksService.removeTask(this.zadatak.id);
    console.log(this.zadatak.id);
    
  }
}
