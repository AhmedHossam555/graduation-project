import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
  @Input() task?: any;
  ngOnChanges() { 
    console.log('Task details updated:', this.task);  
  }
}
