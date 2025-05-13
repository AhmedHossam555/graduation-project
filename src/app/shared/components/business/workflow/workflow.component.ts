import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [FormsModule,SliderModule],
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent {
  activeStroke:string ='#0C66E4';
  zoomValue:number = 0;
  workflow:any[] = [
    { id: 'todo', label: 'TO DO', transitions: ['inprogress', 'done'] },
  ];
  
  // // method for zoom In
  // zoomIn(){
  //   this.zoomValue += 5;
  // }

  // // method for zoom out
  // zoomOut(){
  //   this.zoomValue -= 5;

  // }

zoomLevel = 1.2;
minZoom = 0.1;
maxZoom = 2;

zoomIn() {
  if (this.zoomLevel < this.maxZoom) {
    this.zoomLevel = Math.round((this.zoomLevel + 0.1) * 10) / 10;
  }
}

zoomOut() {
  if (this.zoomLevel > this.minZoom) {
    this.zoomLevel = Math.round((this.zoomLevel - 0.1) * 10) / 10;
  }
}
  


 
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