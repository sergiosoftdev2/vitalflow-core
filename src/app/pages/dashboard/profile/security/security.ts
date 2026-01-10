import { Component, inject, computed } from "@angular/core";
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
    RouterLink,
    BadgeComponent
  ],
  templateUrl: './security.html',
})
export class SecurityComponent {
  private readonly sessionService = inject(SessionService);
  myProfile = this.sessionService.user;
  
  faSave = faSave;
  faChevronLeft = faChevronLeft;
  faShieldAlt = faShieldAlt;
  faKey = faKey;
  faDesktop = faDesktop;

  isGoogleUser = computed(() => !!this.myProfile()?.googleId);
}
