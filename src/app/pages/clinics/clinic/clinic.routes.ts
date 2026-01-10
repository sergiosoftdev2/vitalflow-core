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
    loadComponent: () => import('./pages/clients/clients').then(m => m.ClinicClientsComponent)
  },
  {
    path: 'employees',
    loadComponent: () => import('./pages/employees/employees').then(m => m.ClinicEmployeesComponent)
  },
  {
    path: 'reports',
    loadComponent: () => import('./pages/reports/reports').then(m => m.ClinicReportsComponent)
  },
  {
    path: 'invoices',
    loadComponent: () => import('./pages/invoices/invoices').then(m => m.ClinicInvoicesComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/settings/settings').then(m => m.ClinicSettingsComponent)
  }
];
