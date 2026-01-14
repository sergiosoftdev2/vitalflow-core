import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faChartPie, 
  faBuilding, 
  faChartLine, 
  faUser,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import { SessionService } from '../../../core/services/session.service';
import { AvatarComponent } from '../avatar/avatar';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FontAwesomeModule, AvatarComponent],
  template: `
    <nav class="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800 px-4 pb-safe-area-inset-bottom">
      <div class="flex items-center justify-between h-16 max-w-md mx-auto">
        <!-- Dashboard -->
        <a 
          routerLink="/dashboard" 
          routerLinkActive="text-green-600 dark:text-green-500"
          [routerLinkActiveOptions]="{exact: true}"
          class="flex flex-col items-center justify-center flex-1 h-full text-zinc-500 dark:text-zinc-400 gap-1 transition-all duration-300"
          #rlaDashboard="routerLinkActive"
        >
          <div class="relative items-center justify-center flex">
            <fa-icon [icon]="faChartPie" class="text-xl"></fa-icon>
            <div *ngIf="rlaDashboard.isActive" class="absolute -bottom-1.5 w-1 h-1 bg-current rounded-full"></div>
          </div>
        </a>

        <!-- Clinics -->
        <a 
          routerLink="/dashboard/clinics" 
          routerLinkActive="text-green-600 dark:text-green-500"
          class="flex flex-col items-center justify-center flex-1 h-full text-zinc-500 dark:text-zinc-400 gap-1 transition-all duration-300"
          #rlaClinics="routerLinkActive"
        >
          <div class="relative items-center justify-center flex">
            <fa-icon [icon]="faBuilding" class="text-xl"></fa-icon>
            <div *ngIf="rlaClinics.isActive" class="absolute -bottom-1.5 w-1 h-1 bg-current rounded-full"></div>
          </div>
        </a>

        <!-- Reports -->
        <a 
          routerLink="/dashboard/branding" 
          routerLinkActive="text-green-600 dark:text-green-500"
          class="flex flex-col items-center justify-center flex-1 h-full text-zinc-500 dark:text-zinc-400 gap-1 transition-all duration-300"
          #rlaReports="routerLinkActive"
        >
          <div class="relative items-center justify-center flex">
            <fa-icon [icon]="faChartLine" class="text-xl"></fa-icon>
            <div *ngIf="rlaReports.isActive" class="absolute -bottom-1.5 w-1 h-1 bg-current rounded-full"></div>
          </div>
        </a>

        <!-- Profile -->
        <a 
          routerLink="/dashboard/profile" 
          routerLinkActive
          class="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all duration-300"
          #rlaProfile="routerLinkActive"
        >
          <div class="relative items-center justify-center flex p-0.5 rounded-full border-2 border-transparent transition-all"
               [class.border-green-600]="rlaProfile.isActive"
               [class.dark:border-green-500]="rlaProfile.isActive"
          >
            <app-avatar
              size="sm"
              [src]="profile()?.picture || ''" 
              [alt]="profile()?.firstName || 'Avatar'"
              [initials]="(profile()?.firstName?.charAt(0) || '') + (profile()?.lastName?.charAt(0) || '')"
            ></app-avatar>
          </div>
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .pb-safe-area-inset-bottom {
      padding-bottom: env(safe-area-inset-bottom);
    }
  `]
})
export class MobileNavComponent {
  private sessionService = inject(SessionService);
  profile = this.sessionService.user;

  faChartPie = faChartPie;
  faBuilding = faBuilding;
  faChartLine = faChartLine;
  faUser = faUser;
  faPlusCircle = faPlusCircle;
}
