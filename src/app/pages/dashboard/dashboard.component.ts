import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuModule, ButtonModule],
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
