import { Component, inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-doughnut',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './doughnut.component.html',
  styleUrl: './doughnut.component.scss'
})
export class DoughnutComponent {
  data: any;
    options: any;
    hoveredValue:string = 'Total works items';
    totalNumber:string = '15'
    private _platFormId = inject(PLATFORM_ID);
    private zone = inject(NgZone); // Inject NgZone


    ngOnInit() {
       if(isPlatformBrowser(this._platFormId)){
        const documentStyle = getComputedStyle(document.documentElement);
        // const textColor = documentStyle.getPropertyValue('--text-color');
        this.data = {
          labels: ['To Do', 'In Progress', 'Done'],
          datasets: [
            {
              data: [4, 2, 11],
              backgroundColor: [
                documentStyle.getPropertyValue('--orange-500'), // To Do
                documentStyle.getPropertyValue('--blue-500'),   // In Progress
                documentStyle.getPropertyValue('--pink-500')    // Done
              ],
              hoverBackgroundColor: [
                documentStyle.getPropertyValue('--orange-400'),
                documentStyle.getPropertyValue('--blue-400'),
                documentStyle.getPropertyValue('--pink-400')
              ]
            }
          ]
        };

        this.options = {
          cutout: '70%',
          plugins: {
             position: 'right',
            labels: {
              color: '#374151',
              boxWidth: 12,
              padding: 15
            },
          tooltip: {
                    callbacks: {
                        label: (context: any) => {
                              const label = context.label || '';
                              const value = context.parsed;
                              const total = context.dataset.data.reduce((sum: number, val: number) => sum + val, 0);
                              const percentage = Math.floor((value / total) * 100);
                                // Use NgZone to trigger change detection
                              this.zone.run(() => {
                                  this.totalNumber = `${percentage}%`;
                                  this.hoveredValue = `${label}`;
                            });
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
          },
          responsive: true,
          maintainAspectRatio: false
        };
  
      }    
    }
}
