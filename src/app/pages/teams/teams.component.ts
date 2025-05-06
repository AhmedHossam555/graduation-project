import { Component } from '@angular/core';
import { FlowbiteService } from '../../shared/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { AddPeopleModalComponent } from "../../shared/components/ui/add-people-modal/add-people-modal.component";
import { CreateTeamModalComponent } from "../../shared/components/ui/create-team-modal/create-team-modal.component";

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [AddPeopleModalComponent, CreateTeamModalComponent],
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
