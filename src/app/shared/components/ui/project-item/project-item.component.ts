import { Component, input, output } from '@angular/core';
import { Project } from '../../../interfaces/project';
import { RouterLink } from '@angular/router';
import { FlowbiteService } from '../../../services/flowbite/flowbite.service';
import { ProjectService } from '../../../services/project/project.service';
import { initFlowbite } from 'flowbite';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  

  // output signal project item
  deleteProject = output<number|undefined>();
  
  // input signal item for project
  project = input<Project>();


  
  constructor(private _flowbiteService: FlowbiteService, private projectService:ProjectService){
          }
        
  ngOnInit(): void {
    this._flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
  onclick(event:any){
    // prevent event for parent dom tree
    event.stopPropagation();  
  }

  onDeleteProject(projectId?:number){
    this.deleteProject.emit(projectId);
  }
}
