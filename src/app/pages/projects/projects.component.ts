import { Component } from '@angular/core';
import { FlowbiteService } from '../../shared/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { ProjectModalComponent } from '../../shared/components/ui/project-modal/project-modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectModalComponent,RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
      constructor(private _flowbiteService: FlowbiteService){
        }
        ngOnInit(): void {
          this._flowbiteService.loadFlowbite((flowbite) => {
            initFlowbite();
          });
        }
}
