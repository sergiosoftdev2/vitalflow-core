import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { SidebarComponent } from '../ui/sidebar/sidebar';
import { LayoutService } from '../services/layout.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, FontAwesomeModule],
  templateUrl: './dashboard-layout.component.html'
})
export class DashboardLayoutComponent implements OnInit {
  authService = inject(AuthService);
  layoutService = inject(LayoutService);

  faBars = faBars;
  faBell = faBell;

  ngOnInit() {
    if (window.innerWidth >= 1024) {
      this.layoutService.openSidebar();
    }
  }

  logout() {
    this.authService.logout();
  }
}

