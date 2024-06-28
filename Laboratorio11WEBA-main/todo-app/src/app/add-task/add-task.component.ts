// add-task.component.ts

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  template: `
    <input [(ngModel)]="newTask" placeholder="Nueva tarea">
    <button (click)="addTask()">Agregar tarea</button>
  `,
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<string>();
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskAdded.emit(this.newTask);
      this.newTask = '';
    }
  }
}
