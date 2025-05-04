import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  ItemSprint = new Subject<any>();
  itemStartSprint = new Subject<any>();
  
  constructor() { }
}
