import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-toggle-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './toggle-sidebar.component.html',
  styleUrl: './toggle-sidebar.component.scss'
})
export class ToggleSidebarComponent {

}
