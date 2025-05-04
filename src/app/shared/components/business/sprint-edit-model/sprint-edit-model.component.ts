import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';

@Component({
  selector: 'app-sprint-edit-model',
  standalone: true,
  imports: [],
  templateUrl: './sprint-edit-model.component.html',
  styleUrl: './sprint-edit-model.component.scss'
})
export class SprintEditModelComponent {
  item:any;
  constructor(private _modalService: ModalService) {
  
  }
  ngOnInit() {
    this._modalService.ItemSprint.subscribe({
      next: (value)=>{
        this.item = value;
      }
    })
  }

}
