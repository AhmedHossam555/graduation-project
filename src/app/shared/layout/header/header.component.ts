import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ToggleSidebarComponent } from "./components/toggle-sidebar/toggle-sidebar.component";
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../services/flowbite/flowbite.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,ToggleSidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    constructor(private _flowbiteService: FlowbiteService){
    }
      ngOnInit(): void {
        this._flowbiteService.loadFlowbite((flowbite) => {
          initFlowbite();
        });
      }
}
