import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { SessionService } from "../../../../core/services/session.service";
import { PageContainerComponent } from "../../../ui/container/container";
import { AvatarComponent } from "../../../ui/avatar/avatar";
import { CardComponent } from "../../../ui/card/card";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faArrowRight, faSignOut, faUser, faCreditCard, faShieldAlt, faAdjust } from "@fortawesome/free-solid-svg-icons";
import { OfficialColors } from "../../../ui/colors.constants";
import { TitleComponent } from "../../../ui/title/title";
import { ToolsService } from "../../clinics/services/tools.service";
import { ButtonComponent } from "../../../ui/button/button";

interface configCard {
  title: string;
  description: string;
  route: string;
  icon: any;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, PageContainerComponent, AvatarComponent, FontAwesomeModule, CardComponent, TitleComponent, ButtonComponent],
  templateUrl: './profile.html',
})
export class ProfileComponent {
  private readonly sessionService = inject(SessionService);
  private readonly toolsService = inject(ToolsService);
  
  myProfile = this.sessionService.user;
  faArrowRight = faArrowRight;
  faSignOut = faSignOut;
  OfficialColors = OfficialColors;

  isMobile = this.toolsService.isMobile;

  cards: configCard[] = [
    {
      title: 'Información personal',
      description: 'Gestiona tu foto de perfil, nombre, apellidos y dirección de correo electrónico.',
      route: '/dashboard/profile/personal',
      icon: faUser,
    },
    {
      title: 'Datos Bancarios',
      description: 'Configura tus métodos de pago, datos de facturación y gestiona tus ingresos.',
      route: '/dashboard/profile/billing',
      icon: faCreditCard,
    },
    {
      title: 'Seguridad',
      description: 'Cambia tu contraseña, gestiona la autenticación en dos pasos y revisa tus sesiones.',
      route: '/dashboard/profile/security',
      icon: faShieldAlt,
    },
    {
      title: 'Preferencias',
      description: 'Ajusta el idioma de la plataforma, zona horaria y configuración de notificaciones.',
      route: '/dashboard/profile/preferences',
      icon: faAdjust,
    },
  ];

}
