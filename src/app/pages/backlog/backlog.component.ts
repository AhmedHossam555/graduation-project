import { Component } from '@angular/core';

@Component({
  selector: 'app-backlog',
  standalone: true,
  imports: [],
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
    
  
  
}
