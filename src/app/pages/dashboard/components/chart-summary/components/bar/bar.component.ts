import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent {
priorityData = {
  labels: ['Highest', 'High', 'Medium', 'Low', 'Lowest'],
  datasets: [
    {
      label: 'Tasks',
      backgroundColor: '#9CA3AF',
      data: [0, 0, 4, 0, 0]
    }
  ]
};

priorityOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1
      }
    }
  },
  resposive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,

};

}
