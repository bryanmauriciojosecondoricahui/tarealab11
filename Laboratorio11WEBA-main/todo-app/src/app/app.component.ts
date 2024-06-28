// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { name: string, completed: boolean }[] = [];
  currentFilter: string = 'all';

  addTask(task: string) {
    this.tasks.push({ name: task, completed: false });
  }

  updateFilter(filter: string) {
    this.currentFilter = filter;
  }

  get filteredTasks(): { name: string, completed: boolean }[] {
    if (this.currentFilter === 'all') {
      return this.tasks;
    } else if (this.currentFilter === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (this.currentFilter === 'not-completed') {
      return this.tasks.filter(task => !task.completed);
    }

    return this.tasks;
  }
}
