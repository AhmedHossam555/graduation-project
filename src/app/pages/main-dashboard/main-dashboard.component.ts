import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../shared/layout/sidebar/sidebar.component";

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {

}
