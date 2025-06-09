import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Host, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective {

  constructor(private _ele:ElementRef,@Inject(DOCUMENT) private document:Document) { }

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
