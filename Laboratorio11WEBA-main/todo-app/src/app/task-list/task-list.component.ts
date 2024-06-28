// task-list.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string, completed: boolean }[] = [];

  // Método para marcar una tarea como completada
  markAsCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
