import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/layout/header/header.component";
import { MainSidebarComponent } from "../../shared/layout/main-sidebar/main-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [HeaderComponent, MainSidebarComponent,RouterOutlet],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.scss'
})
export class BoardsComponent {

}
