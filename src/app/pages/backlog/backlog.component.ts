import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-backlog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './backlog.component.html',
  styleUrl: './backlog.component.scss'
})
export class BacklogComponent {
    sprintTasks = [
      { title: 'Task 2', id: 'DSP-1' }
    ];

    backlogTasks = [
      { title: 'Task 2', id: 'DSP-2',status: 'To-do' },
      { title: 'Task 2', id: 'DSP-2',status: 'To-do' },
      { title: 'Task 2', id: 'DSP-2',status: 'To-do' },
    ];
    currentItem: any = null;
    





    /// Add task to backlog
    isVisibleCreateIssue:boolean =false;
    backlogVlaue: any ;
    element?:HTMLElement;
    addTaskToBacklog() {
      this.isVisibleCreateIssue = !this.isVisibleCreateIssue;
    }
    addTaskToBacklogHandler(event:any) {
      if(event.key === 'Enter') {
        // this.backlogTasks.push({ title: this.backlogVlaue, id: 'DSP-2', status: 'To-do' });
        // this.backlogVlaue = '';
        this.isVisibleCreateIssue = false;
      }
    }
}