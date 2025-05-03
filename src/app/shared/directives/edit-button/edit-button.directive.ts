import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appEditButton]',
  standalone: true
})
export class EditButtonDirective {
  @Input('appEditButton') idEdit?:string ;
  constructor(@Inject(DOCUMENT) private document:Document ) { }

  @HostListener('click') onClick() {
    console.log('Edit button clicked!', this.idEdit);
    if(!this.idEdit) return;
    const editElement = this.document.getElementById(this.idEdit);
    if (editElement) {
      editElement.classList.toggle('hidden');
    }
  }
}
