import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile';
import { PersonalComponent } from './profile/personal/personal';
import { BillingComponent } from './profile/billing/billing';
import { SecurityComponent } from './profile/security/security';
import { PreferencesComponent } from './profile/preferences/preferences';
import { ScheduleComponent } from './schedule/schedule';
import { DesignSystemComponent } from '../design-system/design-system';
import { EmployeesComponent } from './employees/employees';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'clients', component: EmployeesComponent },
  { 
    path: 'profile', 
    children: [
      { path: '', component: ProfileComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'security', component: SecurityComponent },
      { path: 'preferences', component: PreferencesComponent },
    ]
  },
  { path: 'design-system', component: DesignSystemComponent }
];
