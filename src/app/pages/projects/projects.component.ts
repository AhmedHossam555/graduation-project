import { Component, signal } from '@angular/core';
import { FlowbiteService } from '../../shared/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { ProjectModalComponent } from '../../shared/components/ui/project-modal/project-modal.component';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../shared/services/project/project.service';
import { Project } from '../../shared/interfaces/project';
import { ProjectItemComponent } from "../../shared/components/ui/project-item/project-item.component";
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectModalComponent,  ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
       projects = signal<Project[]>([]);
       isLoading = signal<boolean>(true);
      constructor(private _flowbiteService: FlowbiteService, private _projectService:ProjectService,private toast: HotToastService){
        }
      
        ngOnInit(): void {
          this._flowbiteService.loadFlowbite((flowbite) => {
            initFlowbite();
          });
          this.getAllProject();
        }
      
      // get All project 
       getAllProject(){
        this._projectService.getAllProject().subscribe({
          next:(res)=>{
            this.isLoading.set(false);
            this.projects.set(res.data.response.projects);
          },
          error:(err)=>{
            this.isLoading.set(false);
            console.log(err);
          }
        })
       }
      

       // on Delete Project 
       onDeleteProject(event:any){
        const element =  document.getElementById("dropdownedit"+event) as HTMLElement;
        element.classList.toggle("hidden");
        this._projectService.softDeleteProject(event).subscribe({
          next: (res)=>{
            if(res.status == "success"){
              this.getAllProject();
              this.toast.success("Project deleted successfully",{
                duration: 2000,
              });
            }
          },
          error:(err)=>{
            console.log(err);
            // delete error message 
            this.toast.error("Failed to delete project");
          }
        })
       }

      
      // On Add Project connect api
      OnCreateProject(event:Project){
        this._projectService.createProject(event).subscribe({
          next: (res)=>{
            if(res.status == "success"){
              this.getAllProject();
              this.toast.success("Project added successfully",{
                duration: 2000,
              });
            }
          },
          error:(err)=>{
            console.log(err);
            // delete error message 
            this.toast.error("Failed to added project");
          }
        })
      }

}
