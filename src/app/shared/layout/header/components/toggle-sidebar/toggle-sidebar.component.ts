import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-toggle-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './toggle-sidebar.component.html',
  styleUrl: './toggle-sidebar.component.scss'
})
export class ToggleSidebarComponent {

  isHome = signal(false);

  constructor(private router:ActivatedRoute){
    this.router.url.subscribe(url => {
      if(url[0].path === 'home'){
        this.isHome.set(true);
      }else{
        this.isHome.set(false); 
      }
    });
  }


}
