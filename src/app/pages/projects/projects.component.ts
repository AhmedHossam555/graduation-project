import { Component } from '@angular/core';
import { FlowbiteService } from '../../shared/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { ProjectModalComponent } from '../../shared/components/ui/project-modal/project-modal.component';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../shared/services/project/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectModalComponent,RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
      constructor(private _flowbiteService: FlowbiteService, private projectService:ProjectService){
        }
      
        ngOnInit(): void {
          this._flowbiteService.loadFlowbite((flowbite) => {
            initFlowbite();
          });
          this.getAllProject();
        }

       getAllProject(){
        this.projectService.getAllProject().subscribe({
          next:(res)=>{
            console.log(res.data)
          }
        })
       }
      


}
