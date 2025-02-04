import { Component } from '@angular/core';
import { HomeComponent } from "./components/pages/land-page/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-graduation';
}
