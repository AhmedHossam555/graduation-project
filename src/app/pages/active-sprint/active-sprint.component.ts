import { Component } from '@angular/core';
import { ModalService } from '../../shared/services/modal/modal.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskDetailsComponent } from "../../shared/components/business/task-details/task-details.component";

@Component({
  selector: 'app-active-sprint',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './active-sprint.component.html',
  styleUrl: './active-sprint.component.scss'
})
export class ActiveSprintComponent {
  tasks:any[]=[{id:1, title:'task1',status:'To-do',description:'lorem addpad p'}];
  constructor(private _modalService:ModalService){

  }
  ngOnInit() {
    this._modalService.itemStartSprint.subscribe((value: any) => {
      this.tasks = value['sprint-tasks'];

      console.log(value);
    });
  }

  currentItem:any;
  filterTask(status: string) {
    return this.tasks.filter((task:any) => task.status === status);
  }
  onStartDrag(item: any) {
    this.currentItem = item;
    console.log("Drag started", item);
  }
  onDrop(event: any, status: string) {
    // console.log("on Drop", event);
    event.preventDefault(); // Prevent default behavior
    const record = this.tasks.find((m:any) => m.id == this.currentItem.id);
    if(record!= undefined) {
      record.status = status;
    }
    this.currentItem = null; // Clear the current item after drop
    console.log(this.tasks);
  }
  onDragOver(event: any) {
    event.preventDefault(); // Prevent default to allow drop
    // console.log("Drag over", event);
  }


  /// Add Task

  taskValue: any = null
  onAddTask() {
    this.isVisibleToDo = !this.isVisibleToDo;
    console.log("Add Task", this.taskValue);
  }
  //  Add Task To To-Do list
  isVisibleToDo: boolean = false;
  onAddTaskToDo() {
    this.isVisibleToDo = !this.isVisibleToDo;
    console.log("Add Task To Do", this.taskValue);
    if (this.taskValue != null) {
      this.tasks.push({
        id: this.tasks.length + 1,
        title: this.taskValue,
        description: "New Task",
        status: "To-do",
        tags: [],
        dueDate: "Jan 25",
        priority: "Normal"
      });
      this.taskValue = null;
    }
  }
  // Cancel Task To Do
  onCancelTaskToDo() {
    this.isVisibleToDo = !this.isVisibleToDo;
    this.taskValue = null;
  }

  // Add Task To In-Progress list
  isVisibleInProgress: boolean = false;
  onAddTaskTwo() {
    this.isVisibleInProgress = !this.isVisibleInProgress;
  
  }
  onAddTaskInProgress() {
    this.isVisibleInProgress = !this.isVisibleInProgress;
    if (this.taskValue != null) {
      this.tasks.push({
        id: this.tasks.length + 1,
        title: this.taskValue,
        description: "New Task",
        status: "In-progress",
        tags: [],
        dueDate: "Jan 25",
        priority: "Normal"
      });
      this.taskValue = null;
    }
  }
  // Cancel Task In Progress
  onCancelTaskInProgress() {
    this.isVisibleInProgress = !this.isVisibleInProgress;
    this.taskValue = null;
  }
  // Add Task To Done list
  isVisibleDone: boolean = false;
  onAddTaskThree() {
    this.isVisibleDone = !this.isVisibleDone;
  }
  onAddTaskDone() { 
    this.isVisibleDone = !this.isVisibleDone;
    if (this.taskValue != null) {
      this.tasks.push({
        id: this.tasks.length + 1,
        title: this.taskValue,
        description: "New Task",
        status: "Done",
        tags: [],
        dueDate: "Jan 25",
        priority: "Normal"
      });
      this.taskValue = null;
    }
  }
  // Cancel Task Done 
  onCancelTaskDone() {
    this.isVisibleDone = !this.isVisibleDone;
    this.taskValue = null;
  }
  

}
