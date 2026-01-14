import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from '../../../../../../app/ui/container/container';
import { TitleComponent } from '../../../../../../app/ui/title/title';
import { EmptyStateComponent } from '../../../../../../app/ui/empty-state/empty-state';
import { faChartPie, faEur, faUserFriends, faUsers, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { TabsComponent } from '../../../../../ui/tabs/tabs';
import { TabItem } from '../../../../../ui/tabs/tabs.enum';

import { ReportsRevenueComponent } from './revenue/revenue';
import { ReportsEmployeesComponent } from './employees/employees';
import { ReportsClientsComponent } from './clients/clients';
import { ReportsAppointmentsComponent } from './appointments/appointments';

@Component({
  selector: 'app-clinic-reports',
  standalone: true,
  imports: [
    CommonModule, 
    PageContainerComponent, 
    TabsComponent,
    ReportsRevenueComponent,
    ReportsEmployeesComponent,
    ReportsClientsComponent,
    ReportsAppointmentsComponent
  ],
  templateUrl: './reports.html'
})
export class ClinicReportsComponent {
  faChartPie = faChartPie;

  activeTabId = 'Ingresos';
  tab: TabItem[] = [
    { id: 'Ingresos', label: 'Ingresos', icon: faEur },
    { id: 'Empleados', label: 'Empleados', icon: faUsers },
    { id: 'Clientes', label: 'Clientes', icon: faUserFriends },
    { id: 'Citas', label: 'Citas', icon: faChartPie },
  ];

  onTabChange(tabId: string) {
    this.activeTabId = tabId;
  }

}
