import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) imeKorisnika!: string;
  @Output() visibleOff = new EventEmitter<boolean>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // ovo je drugi nacin za instanciranje dependency injection Service-a
  private tasksService = inject(TasksService);

  onCancel() {
    this.visibleOff.emit(false);
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      dueDate: this.enteredDate,
      summary: this.enteredSummary,
    }, this.userId);
    this.visibleOff.emit(false);
  }
}

