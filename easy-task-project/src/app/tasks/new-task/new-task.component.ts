import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports:  [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  @Input({ required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
    enterdTitle = "";
    enterdSummary = "";
    enterdDate = "";

  private tasksService = inject(TasksService);

  onCancel() {
   this.close.emit();
  }

  onSubmit() {
   this.tasksService.addTask({
    title: this.enterdTitle,
    summary: this.enterdSummary,
    date: this.enterdDate
  }, this.userId);
  this.close.emit();
  }
}
