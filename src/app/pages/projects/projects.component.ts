import { Component, signal } from '@angular/core';
import { FlowbiteService } from '../../shared/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { ProjectModalComponent } from '../../shared/components/ui/project-modal/project-modal.component';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../shared/services/project/project.service';
import { Project } from '../../shared/interfaces/project';
import { ProjectItemComponent } from "../../shared/components/ui/project-item/project-item.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectModalComponent,  ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
       projects = signal<Project[]>([])
      constructor(private _flowbiteService: FlowbiteService, private projectService:ProjectService){
        }
      
        ngOnInit(): void {
          this._flowbiteService.loadFlowbite((flowbite) => {
            initFlowbite();
          });
          this.getAllProject();
        }
      
      // get All project 
       getAllProject(){
        this.projectService.getAllProject().subscribe({
          next:(res)=>{
            this.projects.set(res.data.response.projects);
            console.log(res.data.response.projects);
          }
        })
       }
      

       // onDelete Project 
       onDeleteProject(event:any){
        this.projectService.softDeleteProject(event).subscribe({
          next: (res)=>{
            if(res.status == "success"){
              this.getAllProject();
            }
          }
        })
       }


}
