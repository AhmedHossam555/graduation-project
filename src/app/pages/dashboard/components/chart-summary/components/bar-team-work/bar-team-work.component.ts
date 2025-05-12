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
    labels: ['Unassigned','assigned'],
    datasets: [
      {
        label: 'Work distribution',
        data: [100,50],
        backgroundColor: ['#6B7280'], // Tailwind slate-gray
        barThickness: 20, // Set the exact height of the bars
        maxBarThickness: 30 // Optional: Set the maximum bar height
      }
    ]
  };

  chartOptions = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    aspectRatio: 4,
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        display: false
      },
      y: {
        display: false,
        // categoryPercentage:0.5, // Reduces the category width (space between bars)
        // barPercentage: 0.2 // Adjusts the width of the bars within the category
      }
    }
  };
}
