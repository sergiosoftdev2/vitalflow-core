import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService } from "../../../../../core/services/theme.service";
import { PageContainerComponent } from "../../../../ui/container/container";
import { CardComponent } from "../../../../ui/card/card";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faChevronLeft, faSun, faMoon, faSave, faPalette, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from "@angular/router";
import { Theme } from "../../../../../core/enums/theme.enum";

@Component({
  selector: 'app-profile-preferences',
  standalone: true,
  imports: [
    CommonModule,
    PageContainerComponent,
    CardComponent,
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './preferences.html',
})
export class PreferencesComponent {
  private readonly themeService = inject(ThemeService);
  
  activeTheme = this.themeService.activeTheme;
  faChevronLeft = faChevronLeft;
  faSun = faSun;
  faMoon = faMoon;
  faSave = faSave;
  faPalette = faPalette;
  faLanguage = faLanguage;
  Theme = Theme;

  toggleTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }
}
