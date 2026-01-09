import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { PageContainerComponent } from "../../../ui/container/container";
import { FirstLetterPipe } from "../../../pipes/first-letter.pipe";
import { AvatarComponent } from "../../../ui/avatar/avatar";
import { CardComponent } from "../../../ui/card/card";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { OfficialColors } from "../../../ui/colors.constants";

interface configCard {
  title: string;
  description: string;
  route: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, PageContainerComponent, FirstLetterPipe, AvatarComponent, CardComponent, FontAwesomeModule],
  templateUrl: './profile.html',
})
export class ProfileComponent {
  private readonly sessionService = inject(SessionService);
  myProfile = this.sessionService.user;
  faArrowRight = faArrowRight;
  OfficialColors = OfficialColors;

  cards: configCard[] = [
    {
      title: 'Información personal',
      description: 'Gestiona tu foto de perfil, nombre, apellidos y dirección de correo electrónico.',
      route: '/dashboard/profile/personal',
    },
    {
      title: 'Datos Bancarios',
      description: 'Configura tus métodos de pago, datos de facturación y gestiona tus ingresos.',
      route: '/dashboard/profile/billing',
    },
    {
      title: 'Seguridad',
      description: 'Cambia tu contraseña, gestiona la autenticación en dos pasos y revisa tus sesiones.',
      route: '/dashboard/profile/security',
    },
    {
      title: 'Preferencias',
      description: 'Ajusta el idioma de la plataforma, zona horaria y configuración de notificaciones.',
      route: '/dashboard/profile/preferences',
    },
  ];

}
