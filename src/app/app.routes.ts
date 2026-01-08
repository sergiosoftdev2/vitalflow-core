import { Routes } from '@angular/router';
import { authGuard, publicGuard } from './guards/auth.guard';
import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
import { LoginComponent } from './pages/auth/login/login';

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
    loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES)
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
    loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
