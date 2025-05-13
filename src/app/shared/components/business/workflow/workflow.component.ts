import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [],
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent {
  activeStroke:string ='#0C66E4';
  workflow:any[] = [
  { id: 'todo', label: 'TO DO', transitions: ['inprogress', 'done'] },
];;
 
}

// export interface TaskStatus {
//   id: string;
//   label: string;
//   transitions: string[]; // ids of next statuses
// }

// export const WORKFLOW: TaskStatus[] = [
//   { id: 'todo', label: 'TO DO', transitions: ['inprogress', 'done'] },
//   { id: 'inprogress', label: 'IN PROGRESS', transitions: ['todo', 'done'] },
//   { id: 'done', label: 'DONE', transitions: ['todo', 'inprogress'] },
// ];