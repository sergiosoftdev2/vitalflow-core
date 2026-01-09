import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile';
import { ScheduleComponent } from './schedule/schedule';
import { DesignSystemComponent } from '../design-system/design-system';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'branding', component: DashboardComponent },
  { path: 'team', component: DashboardComponent },
  { path: 'api', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'design-system', component: DesignSystemComponent }
];
