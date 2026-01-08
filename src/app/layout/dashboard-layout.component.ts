import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="layout-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="logo">
          <h2>Vyntal</h2>
        </div>
        
        <nav class="nav-menu">
          <a routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-item">
            <span class="icon">📊</span>
            Dashboard
          </a>
          <a routerLink="/dashboard/projects" routerLinkActive="active" class="nav-item">
            <span class="icon">📁</span>
            Projects
          </a>
          <a routerLink="/dashboard/settings" routerLinkActive="active" class="nav-item">
            <span class="icon">⚙️</span>
            Settings
          </a>
        </nav>

        <div class="user-profile">
          <div class="avatar">
            {{ (authService.currentUser()?.name?.charAt(0) || 'U') }}
          </div>
          <div class="info">
            <p class="name">{{ authService.currentUser()?.name }}</p>
            <p class="email">{{ authService.currentUser()?.email }}</p>
          </div>
          <button (click)="logout()" class="logout-btn" title="Logout">
            🚪
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <header class="topbar">
          <h1 class="page-title">Dashboard</h1>
          <div class="actions">
            <button class="icon-btn">🔔</button>
          </div>
        </header>
        
        <div class="content-area">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .layout-container {
      display: flex;
      height: 100vh;
      background-color: #f1f5f9;
      font-family: 'Inter', sans-serif;
    }

    /* Sidebar */
    .sidebar {
      width: 260px;
      background-color: #0f172a;
      color: #fff;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
    }

    .logo {
      height: 64px;
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .logo h2 {
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(to right, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
    }

    .nav-menu {
      padding: 1.5rem 1rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      color: #94a3b8;
      text-decoration: none;
      border-radius: 0.5rem;
      transition: all 0.2s;
      font-weight: 500;
    }

    .nav-item:hover {
      background-color: rgba(255, 255, 255, 0.05);
      color: #fff;
    }

    .nav-item.active {
      background: linear-gradient(to right, #3b82f6, #6366f1);
      color: #fff;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .nav-item .icon {
      margin-right: 0.75rem;
      font-size: 1.1rem;
    }

    .user-profile {
      padding: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6366f1, #ec4899);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #fff;
      flex-shrink: 0;
    }

    .info {
      flex-grow: 1;
      overflow: hidden;
    }

    .info .name {
      font-size: 0.875rem;
      font-weight: 600;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .info .email {
      font-size: 0.75rem;
      color: #94a3b8;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .logout-btn {
      background: none;
      border: none;
      color: #94a3b8;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.25rem;
      transition: color 0.2s;
      font-size: 1.1rem;
    }

    .logout-btn:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.1);
    }

    /* Main Content */
    .main-content {
      flex-grow: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .topbar {
      height: 64px;
      background-color: #fff;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .page-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0;
    }

    .icon-btn {
      background: none;
      border: none;
      font-size: 1.25rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      transition: background 0.2s;
    }

    .icon-btn:hover {
      background-color: #f1f5f9;
    }

    .content-area {
      padding: 2rem;
      flex-grow: 1;
    }
  `]
})
export class DashboardLayoutComponent {
  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
