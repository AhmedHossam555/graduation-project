import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../shared/layout/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/layout/header/header.component";

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {

}
