import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appEditButton]',
  standalone: true
})
export class EditButtonDirective {
  @Input('appEditButton') idEdit?:string ;
  constructor(private elementRef: ElementRef,@Inject(DOCUMENT) private document:Document ) { }

  @HostListener('click') onClick() {
    console.log('Edit button clicked!', this.idEdit);
    if(!this.idEdit) return;
    const editElement = this.document.getElementById(this.idEdit);
    if (editElement) {
      this.elementRef.nativeElement.classList.toggle('active-button');
      editElement.classList.toggle('hidden');
    }
    this.document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if(target.classList.contains('edit')){
        this.elementRef.nativeElement.classList.remove('active-button');
        editElement?.classList.add('hidden');
      }
  });
}
}