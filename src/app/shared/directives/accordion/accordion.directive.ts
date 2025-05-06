import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appAccordion]',
  standalone: true
})
export class AccordionDirective {
  // Input decorator  bodyId
  @Input('appAccordion') bodyId?:string;
  constructor(private _elementRef:ElementRef,@Inject(DOCUMENT) private document:Document ) { 
  }
  
  // hostlistener decorator event => click
  @HostListener('click') onClick(){
    this._elementRef.nativeElement.classList.toggle('rotate-90');
    if(this.bodyId)
    this.document.getElementById(this.bodyId)?.classList.toggle('hidden');
  }



}
