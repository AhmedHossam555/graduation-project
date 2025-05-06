import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appAccordion]',
  standalone: true
})
export class AccordionDirective {
  @Input('appAccordion') bodyId?:string;
  constructor(private _elementRef:ElementRef,@Inject(DOCUMENT) private document:Document ) { 
  }


}
