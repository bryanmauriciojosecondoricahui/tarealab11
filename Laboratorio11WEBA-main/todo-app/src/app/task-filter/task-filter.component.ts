// task-filter.component.ts

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();

  setFilter(filter: string) {
    this.filterChanged.emit(filter);
  }
}
