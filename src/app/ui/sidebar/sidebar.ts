import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faUsers, 
  faSearch, 
  faBars, 
  faChartLine,
  faCalendar,
  faUsersBetweenLines,
  faBuilding,
  faUser,
  faSignOut,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';
import { LayoutService } from '../../services/layout.service';
import { SidebarItem } from './sidebar.enum';
import { 
  SIDEBAR_BASE_CLASSES, 
  SIDEBAR_ITEM_CLASSES, 
  SIDEBAR_ITEM_ACTIVE_CLASSES
} from './sidebar.constants';
import { InputSearchComponent } from "../input-search/input-search";
import { BadgeComponent } from "../badge/badge";
import { AvatarComponent } from "../avatar/avatar";
import { SessionService } from '../../services/session.service';
import { ContextMenuDirective } from '../context-menu/context-menu.directive';
import { ContextMenuItem } from '../context-menu/context-menu';
import { Router } from '@angular/router';
import { ButtonComponent } from "../button/button";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ContextMenuDirective, FontAwesomeModule, InputSearchComponent, BadgeComponent, AvatarComponent],
  templateUrl: './sidebar.html'
})
export class SidebarComponent {
  layoutService = inject(LayoutService);
  sessionService = inject(SessionService);
  router = inject(Router);

  profile = this.sessionService.user;

  baseClasses = SIDEBAR_BASE_CLASSES;
  itemClasses = SIDEBAR_ITEM_CLASSES;
  itemActiveClasses = SIDEBAR_ITEM_ACTIVE_CLASSES;
  faSearch = faSearch;
  faBars = faBars;

  profileContextMenu: ContextMenuItem[] = [
    { label: 'Mi perfil', icon: faUser, action: () => this.openProfile() },
    { label: 'Cerrar sesión', icon: faSignOut, action: () => this.sessionService.clearSession() },
  ];

  menuItems: SidebarItem[] = [
    { label: 'Vista general', icon: faChartPie, route: '/dashboard' },
    { label: 'Mis clínicas', icon: faBuilding, route: '/dashboard/clinics' },
    { label: 'Agenda', icon: faCalendar, route: '/dashboard/schedule' },
    { 
      label: 'Informes', 
      icon: faChartLine, 
      route: '/dashboard/branding',
      badge: { value: 'New', color: 'success' }
    },
    { label: 'Clientes', icon: faUsersBetweenLines, route: '/dashboard/api' }
  ];

  openProfile() {
    this.onItemClick();
    this.router.navigate(['dashboard/profile']);
  }

  onItemClick() {
    if (window.innerWidth < 1024) {
      this.layoutService.closeSidebar();
    }
  }
}
