
import { Component } from '@angular/core';

import { ChartModule } from 'primeng/chart';
import { DoughnutComponent } from "./components/doughnut/doughnut.component";
import { BarComponent } from "./components/bar/bar.component";
import { HorizontalBarComponent } from "./components/horizontal-bar/horizontal-bar.component";

@Component({
  selector: 'app-chart-summary',
  standalone: true,
  imports: [ChartModule, DoughnutComponent, BarComponent, HorizontalBarComponent],
  templateUrl: './chart-summary.component.html',
  styleUrl: './chart-summary.component.scss'
})
export class ChartSummaryComponent {
  
}
