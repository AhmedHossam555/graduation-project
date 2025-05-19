import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/layout/header/header.component";

import { RouterOutlet } from '@angular/router';
import { MainSidebarComponent } from '../../shared/layout/main-sidebar/main-sidebar.component';
import { ToggleSidebarComponent } from "../../shared/layout/header/components/toggle-sidebar/toggle-sidebar.component";
import { LoaderComponent } from "../../shared/loader/loader/loader.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, MainSidebarComponent, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
