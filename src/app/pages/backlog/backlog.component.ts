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
    // sprintTasks = [
    //   { title: 'Task 2', id: 'DSP-1' }
    // ];
    sprintTasks = [
      { title: 'Doggie','sprint-tasks':[  { title: 'Task 2', id: 'DSP-2',status: 'To-do' }], id: 'DSP-1' }
    ]

    backlogTasks = [
      { title: 'Task 2', id: 'DSP-2',status: 'To-do' },
      { title: 'Task 2', id: 'DSP-2',status: 'To-do' },
      { title: 'Task 2', id: 'DSP-2',status: 'To-do' },
    ];

    currentItem: any = null;
    



    /// Add task to backlog
    isVisibleCreateIssue:boolean =false;
    backlogVlaue: string = '';

    addTaskToBacklog() {
      this.isVisibleCreateIssue = !this.isVisibleCreateIssue;
    }
    addTaskToBacklogHandler(event:any) {
      console.log(this.backlogVlaue);
      if(event.key === 'Enter') {
        if(this.backlogVlaue.match(/[0-9a-zA-Z]{1,100}/)) {
          this.backlogTasks.push({ title: this.backlogVlaue, id: 'DSP-2', status: 'To-do' });
          this.backlogVlaue = '';
          this.isVisibleCreateIssue = false;
        }
        this.isVisibleCreateIssue = false;
      }
    }

    // Add task to sprint
    isVisibleCreateSprintIssue:boolean =false;
    sprintValue: string = '';
    addTaskToSprint() {
      this.isVisibleCreateIssue = !this.isVisibleCreateIssue;
    }
    addTaskToSprintHandler(event:any) {
      console.log(this.backlogVlaue);
      if(event.key === 'Enter') {
        if(this.backlogVlaue.match(/[0-9a-zA-Z]{1,100}/)) {
          this.backlogTasks.push({ title: this.backlogVlaue, id: 'DSP-2', status: 'To-do' });
          this.backlogVlaue = '';
          this.isVisibleCreateIssue = false;
        }
        this.isVisibleCreateIssue = false;
      }
    }
}