import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/layout/header/header.component";
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../shared/layout/sidebar/sidebar.component";

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, SidebarComponent],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.scss'
})
export class BoardsComponent {

}
