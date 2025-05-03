import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appShowInput]',
  standalone: true
})
export class ShowInputDirective {
  @Input('appShowInput') idInput?: string ;
  constructor(private element:ElementRef,@Inject(DOCUMENT) private document: Document) {
   }
   @HostListener('click') onClick() {
    if (!this.idInput) return;
    const inputElement = this.document.getElementById(this.idInput);
    if (inputElement) {
      inputElement.style.display = 'block';
      this.element.nativeElement.style.display = 'none';
      inputElement.focus();
    }
    inputElement?.addEventListener('keyup', (event) => {
      if(event.key === 'Enter') {
        const inputValue = (event.target as HTMLInputElement).value;
        if (inputValue.match(/[0-9a-zA-Z]{1,100}/)) {
          // this.element.nativeElement.innerText = inputValue;
          this.element.nativeElement.style.display = 'block';
          inputElement.style.display = 'none';
        } else {
          this.element.nativeElement.style.display = 'block';
          inputElement.style.display = 'none';
        }
      }
    }
  );
  }
}
