import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
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
      description: "Streamline workflows to boost team collaboration significantly",
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
    },
    {
      id: 7,
      title: "Design system update",
      description: "Enhance design system for consistency and usability",
      status: "Done",
      tags: ["Design", "New releases"],
      dueDate: "Jan 25",
      priority: "High"
    },
    {
      id: 8,
      title: "Retention rate by 23%",
      description: "Improve retention through campaigns and feature update",
      status: "Done",
      tags: ["Marking", "Product"],
      dueDate: "Jan 25",
      priority: "High"
    },
    {
      id: 9,
      title: "KYC Flow",
      description: "Simplify KYC process for seamless user verification",
      status: "Done",
      tags: ["Product", "Design"],
      dueDate: "Jan 25",
      priority: "Normal"
    }
  ];
  
  

}
