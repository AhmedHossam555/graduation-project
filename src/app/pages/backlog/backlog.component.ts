import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowInputDirective } from '../../shared/directives/show-input/show-input.directive';
import { NgClass } from '@angular/common';
import { EditButtonDirective } from '../../shared/directives/edit-button/edit-button.directive';
import { DropdownStatusDirective } from '../../shared/directives/dropdown-status/dropdown-status.directive';
import { SprintEditModelComponent } from "../../shared/components/business/sprint-edit-model/sprint-edit-model.component";
import { FlowbiteService } from '../../shared/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { ModalService } from '../../shared/services/modal/modal.service';
import { SprintStartModelComponent } from '../../shared/components/business/sprint-start-model/sprint-start-model.component';

@Component({
  selector: 'app-backlog',
  standalone: true,
  imports: [FormsModule, ShowInputDirective, NgClass, EditButtonDirective, DropdownStatusDirective, SprintEditModelComponent,SprintStartModelComponent],
  templateUrl: './backlog.component.html',
  styleUrl: './backlog.component.scss'
})
export class BacklogComponent {
    // sprintTasks = [
    //   { title: 'Task 2', id: 'DSP-1' }
    // ];
    sprintTasks = [
      { title: 'Doggie','sprint-tasks':[  { title: 'Task 2', id: 1,status: 'To-do' }, { title: 'Task 2', id: 2,status: 'To-do' }], id: 1, startDate: '2023-10-01', endDate: '2023-10-15',sprintGoal: 'authorization', sprintStart: false },
      { title: 'Fake','sprint-tasks':[  { title: 'Task 2', id: 2,status: 'To-do' }], id: 2, startDate: '2023-10-01', endDate: '2023-10-15',sprintGoal: 'authorization', sprintStart: false },
    ]

    backlogTasks:any[] = [
      { title: 'Task 1', id: 1,status: 'To-do' },
      { title: 'Task 2', id: 2,status: 'In-progress' },
      { title: 'Task 3', id: 3,status: 'To-do' },
    ];
    
      constructor(private _flowbiteService: FlowbiteService, private _modalService:ModalService){
      }
      ngOnInit(): void {
        this._flowbiteService.loadFlowbite((flowbite) => {
          initFlowbite();
        });
      }

     




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


    //////(click)="updateTaskStatus(item, 'In Progress')"

    updateTaskStatus(event:any,item:any, status:string){
      const element  = event.target as HTMLElement;
      
      // console.log("updateTaskStatus", item, status);
      const record = this.backlogTasks.find((m:any) => m.id == item.id);
      if(record!= undefined) {
        record.status = status;
      }
    
    }

    /////////////// onCreateSprint
    onCreateSprint() {
         // Helper function to format date to dd-mm-yyyy
        const formatDate = (date:any) => {
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
          const year = date.getFullYear();
          return `${day}-${month}-${year}`;
      };
      // Get the start date from the last sprint's end date or set it to today's date if there are no previous sprints
      const lastSprintEndDate = this.sprintTasks.length > 0 ? this.sprintTasks[this.sprintTasks.length - 1]['endDate'] : new Date();
        
      // Create a new start date for the new sprint
      const startDate = new Date(lastSprintEndDate);
      
      // Calculate the end date as two weeks later
      const twoWeeksLater = new Date(startDate.getTime() + (14 * 24 * 60 * 60 * 1000));
      // Format the start and end dates
      const formattedStartDate = formatDate(startDate);
      const formattedEndDate = formatDate(twoWeeksLater);
      // console.log('Start Date:', formattedStartDate);
      // console.log('Two Weeks Later (End Date):', formattedEndDate);
      this.sprintTasks.push({ title: 'Sprint-'+this.sprintTasks.length, id: this.sprintTasks.length + 1, startDate: formattedStartDate , endDate: formattedEndDate, sprintGoal: '', sprintStart: false, 'sprint-tasks': [] });
    }


    /////////update sprint
    sprintItemInput:any;
    updateSprintItem(item:any){
      this._modalService.ItemSprint.next(item);
      this.sprintItemInput = item;
    }
  
    /// onStartSprint
    onStartSprint(item:any){
      this._modalService.itemStartSprint.next(item);
    }

}