import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({required:true}) imeKorisnika!:string;
  @Output() visibleOff = new EventEmitter<boolean>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel(){
    this.visibleOff.emit(false);
  }
}
