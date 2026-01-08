import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'schedule', component: DashboardComponent },
  { path: 'branding', component: DashboardComponent },
  { path: 'team', component: DashboardComponent },
  { path: 'api', component: DashboardComponent }
];
