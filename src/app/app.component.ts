import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { ToggleSidebarComponent } from "./shared/layout/header/components/toggle-sidebar/toggle-sidebar.component";
import { WorkflowComponent } from "./shared/components/business/workflow/workflow.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToggleSidebarComponent, WorkflowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'graduation-project';
  constructor(private _flowbiteService: FlowbiteService){
  }
  ngOnInit(): void {
    this._flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
