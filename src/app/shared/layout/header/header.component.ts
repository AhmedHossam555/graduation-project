import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { ToggleSidebarComponent } from "./components/toggle-sidebar/toggle-sidebar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, SidebarModule, ButtonModule, ToggleSidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    sidebarVisible: boolean = false;
}
