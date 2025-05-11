import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-bar-team-work',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './bar-team-work.component.html',
  styleUrl: './bar-team-work.component.scss'
})
export class BarTeamWorkComponent {
 chartData = {
    labels: ['Assigned', 'Unassigned'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: [
          '#3B82F6', // blue-500
          '#E5E7EB'  // gray-200
        ],
        hoverBackgroundColor: [
          '#2563EB', // blue-600
          '#D1D5DB'  // gray-300
        ],
        borderWidth: 0
      }
    ]
  };

  chartOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };
}
