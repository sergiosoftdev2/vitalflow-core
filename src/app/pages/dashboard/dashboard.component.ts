import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { PageContainerComponent } from "../../ui/container/container";
import { TitleComponent } from "../../ui/title/title";
import { SessionService } from '../../services/session.service';
import { CardComponent } from '../../ui/card/card';
import { ButtonComponent } from '../../ui/button/button';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWallet, faCalendarCheck, faArrowRight, faCalendarDay, faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    PageContainerComponent, 
    TitleComponent, 
    CardComponent,  
    RouterLink, 
    FontAwesomeModule
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  authService = inject(AuthService);
  sessionService = inject(SessionService);

  myProfile = this.sessionService.getUserValue();

  get greeting(): string {
    const hour = new Date().getHours();
    
    if (hour >= 6 && hour < 12) {
      return 'Buenos días';
    } else if (hour >= 12 && hour < 20) {
      return 'Buenas tardes';
    } else {
      return 'Buenas noches';
    }
  }

  title = `${this.greeting}, ${this.myProfile?.firstName || 'Usuario'}`;

  // Icons
  faWallet = faWallet;
  faCalendarCheck = faCalendarCheck;
  faArrowRight = faArrowRight;
  faCalendarDay = faCalendarDay;
  faChartLine = faChartLine;

  // Mock Data
  balance = 12450.85;

}

