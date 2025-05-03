import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowInputDirective } from '../../shared/directives/show-input/show-input.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-backlog',
  standalone: true,
  imports: [FormsModule, ShowInputDirective,NgClass],
  templateUrl: './backlog.component.html',
  styleUrl: './backlog.component.scss'
})
export class BacklogComponent {
    // sprintTasks = [
    //   { title: 'Task 2', id: 'DSP-1' }
    // ];
    sprintTasks = [
      { title: 'Doggie','sprint-tasks':[  { title: 'Task 2', id: 1,status: 'To-do' }], id: 1, startDate: '2023-10-01', endDate: '2023-10-15',sprintGoal: 'authorization', sprintStart: false },
      { title: 'Fake','sprint-tasks':[  { title: 'Task 2', id: 2,status: 'To-do' }], id: 2, startDate: '2023-10-01', endDate: '2023-10-15',sprintGoal: 'authorization', sprintStart: false },
    ]

    backlogTasks:any[] = [
      { title: 'Task 1', id: 1,status: 'To-do' },
      { title: 'Task 2', id: 2,status: 'To-do' },
      { title: 'Task 3', id: 3,status: 'To-do' },
    ];

    // currentItem
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
          this.backlogTasks.push({ title: this.backlogVlaue, id: this.backlogTasks.length + 1, status: 'To-do' });
          this.backlogVlaue = '';
          this.isVisibleCreateIssue = false;
        }
        this.isVisibleCreateIssue = false;
      }
    }


    isVisibleCreateSprintIssue:boolean =false;
    sprintTaskValue: string = '';

    addTaskToSprintHandler(event:any,index: number) {
      if(event.key === 'Enter') {
        if(this.sprintTaskValue.match(/[0-9a-zA-Z]{1,100}/)) {
          this.sprintTasks[index]['sprint-tasks'].push({ title: this.sprintTaskValue, id: this.sprintTasks.length+1, status: 'To-do' });
          this.sprintTaskValue = '';
        }
      }
    }


    /// Drag and Drop  Backlog and Sprint Task
    onDragStart(item: any) {
      this.currentItem = item;
      // console.log("Drag started", item);
    }
    
    onDrop(event: any, index: number) {
      event.preventDefault(); // Prevent default behavior
      // console.log("on Drop", index);
      // console.log("on Drop", event);
      if (!this.currentItem) return;
      const record = this.backlogTasks.findIndex((m:any) => m.id == this.currentItem.id);
      if (index > -1) {
        // console.log("on Drop", index);
        // console.log("on Drop Index record", record);
      
        const task:any = this.backlogTasks.splice(record, 1)[0];
        // console.log("on Drop task", task);
        this.sprintTasks[index]['sprint-tasks'].push(task); // Push to correct sprint
      }
    
      // console.log("on Drop", event);
    }

    onDragOver(event: any) {
      event.preventDefault(); // Prevent default to allow drop
      // console.log("Drag over", event);
    }



}