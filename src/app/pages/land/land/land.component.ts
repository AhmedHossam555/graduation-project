import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-land',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './land.component.html',
  styleUrl: './land.component.scss'
})
export class LandComponent {

}
