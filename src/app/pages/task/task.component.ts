import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  tasks: any[] = [
    {
      id: 1,
      title: "Design system update",
      description: "Enhance design system for consistency and usability",
      status: "To-do",
      tags: ["Design", "New releases"],
      dueDate: "Jan 25",
      priority: "High"
    },
    {
      id: 2,
      title: "Retention rate by 23%",
      description: "Improve retention through campaigns and feature update",
      status: "To-do",
      tags: ["Marking", "Product"],
      dueDate: "Jan 25",
      priority: "High"
    },
    {
      id: 3,
      title: "KYC Flow",
      description: "Simplify KYC process for seamless user verification",
      status: "To-do",
      tags: ["Product", "Design"],
      dueDate: "Jan 25",
      priority: "Normal"
    },
    {
      id: 4,
      title: "Icon system",
      description: "Developer scalable icons for cohesive platform visuals",
      status: "In-progress",
      tags: ["Design"],
      dueDate: "Jan 25",
      priority: "Normal"
    },
    {
      id: 5,
      title: "Improve collection by 50 %",
      description: "Streamline workflows to boost ",
      status: "In-progress",
      tags: [],
      dueDate: "Jan 25",
      priority: "High"
    },
    {
      id: 6,
      title: "Checkout flow design",
      description: "Optimize checkout process to improve conversion rates",
      status: "In-progress",
      tags: ["Product", "Design"],
      dueDate: "Jan 25",
      priority: "High"
    }
    ,
    // {
    //   id: 7,
    //   title: "Design system update",
    //   description: "Enhance design system for consistency and usability",
    //   status: "Done",
    //   tags: ["Design", "New releases"],
    //   dueDate: "Jan 25",
    //   priority: "High"
    // },
    // {
    //   id: 8,
    //   title: "Retention rate by 23%",
    //   description: "Improve retention through campaigns and feature update",
    //   status: "Done",
    //   tags: ["Marking", "Product"],
    //   dueDate: "Jan 25",
    //   priority: "High"
    // },
    // {
    //   id: 9,
    //   title: "KYC Flow",
    //   description: "Simplify KYC process for seamless user verification",
    //   status: "Done",
    //   tags: ["Product", "Design"],
    //   dueDate: "Jan 25",
    //   priority: "Normal"
    // }
  ];
  currentItem:any;
  filterTask(status: string) {
    return this.tasks.filter(task => task.status === status);
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
  
  /////////////////////////////////Task Details
  show(){
    console.log("show");
  }
  
}
