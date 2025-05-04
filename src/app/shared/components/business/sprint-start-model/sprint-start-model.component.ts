import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';
import {  Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-sprint-start-model',
  standalone: true,
  imports: [],
  templateUrl: './sprint-start-model.component.html',
  styleUrl: './sprint-start-model.component.scss'
})
export class SprintStartModelComponent {
  item?:any;

  constructor(private _modalService: ModalService, private _route:Router) {
  
  }
  ngOnInit() {
    this._modalService.itemStartSprint.subscribe({
      next: (value:any) => {
        this.item = value;
      }
    });
  }
  onStartSprint() {
    this._route.navigate(['backlog']);
  }
}
