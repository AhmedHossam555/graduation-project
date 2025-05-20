import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef,  Inject, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLoader]',
  standalone: true
})
export class LoaderDirective {

  @Input('appLoader') isLoaded: boolean = false;

  constructor(private ele: ElementRef, @Inject(DOCUMENT) private document: Document) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoaded'] && this.isLoaded) {
      this.ele.nativeElement.classList.add('hidden');
      this.document.body.classList.remove('h-screen', 'overflow-hidden');
    }
  }

}
