import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Host, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective {
  constructor(private _ele:ElementRef,@Inject(DOCUMENT) private document:Document) { }

  // This directive listens to the scroll event and hides the element when the user scrolls to the bottom of the page
  // and shows it when the user scrolls up.
  // It is useful for hiding elements like a "Back to Top" button or a floating action button when the user is at the bottom of the page.
  @HostListener('window:scroll', ['$event']) onScroll(){
    const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
    const footer = this.document.querySelector('#footer');
    if (footer && typeof footer.scrollHeight === 'number' && scrollTop >= footer.scrollHeight - 50 ) {
      this._ele.nativeElement.style.display = 'none';
    }else{
      this._ele.nativeElement.style.display = 'flex';
    }
  }
}
