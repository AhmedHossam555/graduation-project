import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Host, HostListener, Inject } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[appDropdownStatus]',
  standalone: true
})
export class DropdownStatusDirective {
  @Input('appDropdownStatus') idEdit?:string ;
  constructor(private elementRef:ElementRef,@Inject(DOCUMENT) private document:Document) { }

  @HostListener('click') onClick() {
    
    
    if(!this.idEdit) return;
    const editElement = this.document.getElementById(this.idEdit);
    if (editElement) {  
      editElement.classList.toggle('hidden');
    }   
    this.document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if(target.classList.contains('status')){
        editElement?.classList.add('hidden');
      }

      
    }
  );
  
  }

}

