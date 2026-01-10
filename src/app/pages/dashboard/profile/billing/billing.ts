import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SessionService } from "../../../../../core/services/session.service";
import { PageContainerComponent } from "../../../../ui/container/container";
import { CardComponent } from "../../../../ui/card/card";
import { InputTextComponent } from "../../../../ui/input-text/input-text";
import { ButtonComponent } from "../../../../ui/button/button";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faSave, faChevronLeft, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-profile-billing',
  standalone: true,
  imports: [
    CommonModule,
    PageContainerComponent,
    CardComponent,
    InputTextComponent,
    ButtonComponent,
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './billing.html',
})
export class BillingComponent {
  private readonly sessionService = inject(SessionService);
  myProfile = this.sessionService.user;
  
  faSave = faSave;
  faChevronLeft = faChevronLeft;
  faCreditCard = faCreditCard;

  // Mock data
  bankData = {
    iban: 'ES21 0049 1234 56 1234567890',
    swift: 'BCHDESMM',
    bank: 'Banco Santander'
  };
}
