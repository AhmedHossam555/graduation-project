import { Component, inject, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from "../../shared/layout/header/header.component";
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../shared/layout/sidebar/sidebar.component";
import { LoaderComponent } from "../../shared/loader/loader/loader.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, SidebarComponent, LoaderComponent],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.scss'
})
export class BoardsComponent {
  // inject platform id
  // this is used to check if the platform is browser or server
  private _platForm = inject(PLATFORM_ID);  
  ngOnInit() {
    if(isPlatformBrowser(this._platForm)){
          // remove the loader after 1 second
          // this is used to remove the loader from the dom
        
          const loader =document.getElementById("loader-second") as HTMLElement;
          if(loader){
            setTimeout(()=>{
                  loader.remove();
                  document.body.classList.remove('h-screen','overflow-hidden');
            } , 1000);
          }
      }
  }

}
