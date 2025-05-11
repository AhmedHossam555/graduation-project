
import { Component } from '@angular/core';

import { ChartModule } from 'primeng/chart';
import { DoughnutComponent } from "./components/doughnut/doughnut.component";

@Component({
  selector: 'app-chart-summary',
  standalone: true,
  imports: [ChartModule, DoughnutComponent],
  templateUrl: './chart-summary.component.html',
  styleUrl: './chart-summary.component.scss'
})
export class ChartSummaryComponent {
  
}
