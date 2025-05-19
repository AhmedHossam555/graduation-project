import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  private _platForm = inject(PLATFORM_ID);
  ngOnInit() {
    if(isPlatformBrowser(this._platForm)){
      document.body.classList.add('h-screen','overflow-hidden');
    }
  
  }

}
