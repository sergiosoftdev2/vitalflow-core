import { Routes } from '@angular/router';
import { ClinicsComponent } from './clinics';
import { ClinicComponent } from './clinic/clinic';

export const CLINICS_ROUTES: Routes = [
  { path: '', component: ClinicsComponent },
  { 
    path: ':id', 
    component: ClinicComponent,
    loadChildren: () => import('./clinic/clinic.routes').then(m => m.CLINIC_ROUTES)
  }
];
