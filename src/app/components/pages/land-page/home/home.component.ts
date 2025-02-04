import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MainSectionComponent } from "../main-section/main-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
