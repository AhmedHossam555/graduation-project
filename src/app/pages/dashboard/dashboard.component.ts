import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { HeaderSummaryComponent } from "./components/header-summary/header-summary.component";
import { ChartSummaryComponent } from "./components/chart-summary/chart-summary.component";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuModule, ButtonModule, HeaderSummaryComponent, ChartSummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Refresh',
                        icon: 'pi pi-refresh'
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-upload'
                    }
                ]
            }
        ];
    }

}
