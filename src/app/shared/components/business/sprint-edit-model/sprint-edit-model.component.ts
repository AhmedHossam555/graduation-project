import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sprint-edit-model',
  standalone: true,
  imports: [],
  templateUrl: './sprint-edit-model.component.html',
  styleUrl: './sprint-edit-model.component.scss'
})
export class SprintEditModelComponent implements OnChanges{
  @Input()  itemSprint?: any; 
  ngOnChanges(changes: SimpleChanges): void {
  
  }
  ngAfterViewInit(){
    console.log( this.itemSprint);
  }

}
