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
  faSignOut
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
  imports: [CommonModule, RouterLink, RouterLinkActive, ContextMenuDirective, FontAwesomeModule, InputSearchComponent, BadgeComponent, AvatarComponent, ButtonComponent],
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
    { label: 'Mi Clínica', icon: faBuilding, route: '/dashboard' },
    { label: 'Agenda', icon: faCalendar, route: '/dashboard/schedule' },
    { 
      label: 'Mi equipo', 
      icon: faUsers, 
      route: '/dashboard/positions',
      badge: { value: 8, color: 'primary' }
    },
    { 
      label: 'Informes', 
      icon: faChartLine, 
      route: '/dashboard/branding',
      badge: { value: 'New', color: 'success' }
    },
    { label: 'Clientes', icon: faUsersBetweenLines, route: '/dashboard/api' }
  ];

  openProfile() {
    this.router.navigate(['dashboard/profile']);
  }

}
