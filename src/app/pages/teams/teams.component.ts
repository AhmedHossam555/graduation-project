import { Component } from '@angular/core';
import { FlowbiteService } from '../../shared/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
    constructor(private _flowbiteService: FlowbiteService){
    }
    ngOnInit(): void {
      this._flowbiteService.loadFlowbite((flowbite) => {
        initFlowbite();
      });
    }
}
