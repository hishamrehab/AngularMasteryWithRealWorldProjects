import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports:  [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
    enterdTitle = "";
    enterdSummary = "";
    enterdDate = "";

  onCancel() {
   this.cancel.emit();
  }

  onSubmit() {
  this.add.emit({
    title: this.enterdTitle,
    summary: this.enterdSummary,
    date: this.enterdDate
  })
  }
}
