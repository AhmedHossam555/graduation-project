import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowInputDirective } from '../../shared/directives/show-input.directive';

@Component({
  selector: 'app-backlog',
  standalone: true,
  imports: [FormsModule, ShowInputDirective],
  templateUrl: './backlog.component.html',
  styleUrl: './backlog.component.scss'
})
export class BacklogComponent {
    // sprintTasks = [
    //   { title: 'Task 2', id: 'DSP-1' }
    // ];
    sprintTasks = [
      { title: 'Doggie','sprint-tasks':[  { title: 'Task 2', id: 'DSP-1',status: 'To-do' }], id: 'DSP-1', startDate: '2023-10-01', endDate: '2023-10-15' },
      { title: 'Project2','sprint-tasks':[  { title: 'Task 2', id: 'DSP-2',status: 'To-do' }], id: 'DSP-1', startDate: '2023-10-01', endDate: '2023-10-15'  }

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
    // get isVisibleCreateSprintIssues() {
    //   return this._isVisibleCreateSprintIssues;
    // }
    isVisibleCreateSprintIssue:boolean =false;
    sprintTaskValue: string = '';
    addTaskToSprint() {
      this.isVisibleCreateSprintIssue = !this.isVisibleCreateSprintIssue;
    }
    addTaskToSprintHandler(event:any,index: number) {
      console.log(this.sprintTaskValue);
      if(event.key === 'Enter') {
        if(this.sprintTaskValue.match(/[0-9a-zA-Z]{1,100}/)) {
          this.sprintTasks[0]['sprint-tasks'].push({ title: this.sprintTaskValue, id: 'DSP-2', status: 'To-do' });
          this.sprintTaskValue = '';
          this.isVisibleCreateIssue = false;
        }
        this.isVisibleCreateIssue = false;
      }
    }
}