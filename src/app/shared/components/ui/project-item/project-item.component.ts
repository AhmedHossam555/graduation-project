import { Component, input, output } from '@angular/core';
import { Project } from '../../../interfaces/project';
import { RouterLink } from '@angular/router';
import { FlowbiteService } from '../../../services/flowbite/flowbite.service';
import { ProjectService } from '../../../services/project/project.service';
import { initFlowbite } from 'flowbite';


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

  // output signal for edit project
  editProject = output<Project>();


  

  
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

  // onEdit Project
  onEditProject(project:any, id:string){
    console.log("onEditProject", project);
    const element =  document.getElementById(id) as HTMLElement;
    element.classList.toggle("hidden");
    this.editProject.emit(project);
  }
}
