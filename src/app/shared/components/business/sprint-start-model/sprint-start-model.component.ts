import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sprint-start-model',
  standalone: true,
  imports: [],
  templateUrl: './sprint-start-model.component.html',
  styleUrl: './sprint-start-model.component.scss'
})
export class SprintStartModelComponent {
  item?:any;

  constructor(private _modalService: ModalService, private _router:Router) {
    this.item = this._modalService.ItemSprint;
  
  }
  ngOnInit() {
    this._modalService.itemStartSprint.subscribe({
      next: (value:any) => {
        this.item = value;
      }
    });
  }
  onStartSprint() {
    this.item.sprintStart = true;
    this._router.navigate(['/main-dashboard/active-sprint']);
    this._modalService.itemStartSprint.next(this.item);
  }
}
