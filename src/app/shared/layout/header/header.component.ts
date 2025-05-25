import { Component, effect, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ToggleSidebarComponent } from "./components/toggle-sidebar/toggle-sidebar.component";
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../services/flowbite/flowbite.service';

import { isPlatformBrowser, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,ToggleSidebarComponent,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    // _platForm = inject(PLATFORM_ID);
    // darkMode = signal<boolean>(
    //   isPlatformBrowser(this._platForm) ? JSON.parse(window.localStorage.getItem('dark') || 'false') : ''
    // );


    // constructor(private _flowbiteService: FlowbiteService){

    //    effect(()=>{
    //     if(isPlatformBrowser(this._platForm)){
    //          window.localStorage.setItem('dark',JSON.stringify(this.darkMode()));
    //          document.querySelector('html')?.classList.toggle('dark')
    //     }
    //    })
    // }
    
      ngOnInit(): void {
        this._flowbiteService.loadFlowbite((flowbite) => {
          initFlowbite();
        });
      }
    

      // toggle dark mode
      // toggleDarkMode(): void {
      //   this.darkMode.set(!this.darkMode());
      // }

    _platform = inject(PLATFORM_ID);
  darkMode = isPlatformBrowser(this._platform)
    ? JSON.parse(localStorage.getItem('dark') || 'false')
    : false;

  constructor(private _flowbiteService: FlowbiteService) {
    if (isPlatformBrowser(this._platform)) {
      this.updateDarkModeClass();
    }
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('dark', JSON.stringify(this.darkMode));
    this.updateDarkModeClass();
  }

  private updateDarkModeClass(): void {
    const htmlElement = document.querySelector('html');
    if (this.darkMode) {
      htmlElement?.classList.add('dark');
    } else {
      htmlElement?.classList.remove('dark');
    }
  }

  
}
