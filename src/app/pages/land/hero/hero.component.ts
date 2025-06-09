import { Component } from '@angular/core';
import { ScrollDirective } from '../../../shared/directives/scroll/scroll.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
