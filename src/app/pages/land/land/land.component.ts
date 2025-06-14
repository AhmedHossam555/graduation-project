import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-land',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, FooterComponent],
  templateUrl: './land.component.html',
  styleUrl: './land.component.scss'
})
export class LandComponent {

}
