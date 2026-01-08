import { Routes } from '@angular/router';
import { authGuard, publicGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/auth/login/login';
import { RegisterComponent } from './pages/auth/register/register.component';
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
    path: 'success',
    component: LoginComponent,
    canActivate: [publicGuard]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'positions', component: DashboardComponent }, // Placeholder
      { path: 'branding', component: DashboardComponent },  // Placeholder
      { path: 'team', component: DashboardComponent },      // Placeholder
      { path: 'api', component: DashboardComponent }       // Placeholder
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
