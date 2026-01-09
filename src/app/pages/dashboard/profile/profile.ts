import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SessionService } from "../../../services/session.service";
import { PageContainerComponent } from "../../../ui/container/container";
import { FirstLetterPipe } from "../../../pipes/first-letter.pipe";
import { AvatarComponent } from "../../../ui/avatar/avatar";
import { CardComponent } from "../../../ui/card/card";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { OfficialColors } from "../../../ui/colors.constants";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, PageContainerComponent, FirstLetterPipe, AvatarComponent, CardComponent, FontAwesomeModule],
  templateUrl: './profile.html',
})
export class ProfileComponent {
  private readonly sessionService = inject(SessionService);
  myProfile = this.sessionService.user;
  faArrowRight = faArrowRight;
  OfficialColors = OfficialColors;
}
