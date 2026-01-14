import { Component, inject, computed, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SessionService } from "../../../../../core/services/session.service";
import { PageContainerComponent } from "../../../../ui/container/container";
import { CardComponent } from "../../../../ui/card/card";
import { InputPasswordComponent } from "../../../../ui/input-password/input-password";
import { ButtonComponent } from "../../../../ui/button/button";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faSave, faChevronLeft, faShieldAlt, faKey, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from "@angular/router";

import { BadgeComponent } from "../../../../ui/badge/badge";
import { SessionDto } from "../../../../core/api/models";
import { OfficialColors } from "../../../../ui/colors.constants";
import { ToastService } from "../../../../../core/services/toast.service";
import { ToolsService } from "../../../clinics/services/tools.service";

@Component({
  selector: 'app-profile-security',
  standalone: true,
  imports: [
    CommonModule,
    PageContainerComponent,
    CardComponent,
    InputPasswordComponent,
    ButtonComponent,
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './security.html',
})
export class SecurityComponent {
  private readonly sessionService = inject(SessionService);
  private readonly toastService = inject(ToastService);
  private readonly toolsService = inject(ToolsService);

  myProfile = this.sessionService.user;
  
  faSave = faSave;
  faChevronLeft = faChevronLeft;
  faShieldAlt = faShieldAlt;
  faKey = faKey;
  faDesktop = faDesktop;

  colors = OfficialColors;

  isGoogleUser = computed(() => !!this.myProfile()?.googleId);
  isMobile = this.toolsService.isMobile;
  activeSessions = signal<SessionDto[]>([]);

  iconDeviceTypeRecord: Record<string, string> = {
    'google-oauth': 'fa-brands fa-google',
    'desktop': 'faDesktop',
    'mobile': 'faMobile',
    'tablet': 'faTablet',
    'unknown': 'faQuestion',
  }

  ngOnInit() {
    this.fetchSessions();
  }

  fetchSessions() {
    this.sessionService.getSessionsOfUser().subscribe({
      next: (sessions) => {
        this.activeSessions.set(sessions);
      },
      error: (err) => {
        console.error('Error fetching sessions:', err);
        this.toastService.error('No se pudieron cargar las sesiones activas');
      }
    });
  }

  deleteSession(sessionId: string) {
    this.sessionService.deleteSession(sessionId).subscribe({
      next: () => {
        this.toastService.success('Sesión cerrada correctamente');
        this.fetchSessions();
      },
      error: () => {
        this.toastService.error('Error al cerrar la sesión');
      }
    });
  }

}
