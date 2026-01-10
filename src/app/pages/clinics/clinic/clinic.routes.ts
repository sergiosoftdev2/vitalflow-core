import { Routes } from '@angular/router';

export const CLINIC_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  },
  {
    path: 'schedule',
    loadComponent: () => import('../../dashboard/schedule/schedule').then(m => m.ScheduleComponent)
  },
  {
    path: 'clients',
    loadComponent: () => import('../../dashboard/employees/employees').then(m => m.EmployeesComponent)
  },
  {
    path: 'reports',
    loadComponent: () => import('../../dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'invoices',
    loadComponent: () => import('../../dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('../../dashboard/profile/profile').then(m => m.ProfileComponent)
  }
];
