import { Routes } from '@angular/router';
import { authGuard, publicGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'design-system',
    loadComponent: () => import('./pages/design-system/design-system').then(m => m.DesignSystemComponent)
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    canActivate: [publicGuard],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashboardComponent },
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
