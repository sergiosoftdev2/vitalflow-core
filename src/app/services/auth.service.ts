import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { SessionService } from './session.service';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sessionService = inject(SessionService);
  private router = inject(Router);
  
  // Expose signals from session service
  currentUser = this.sessionService.user;
  isAuthenticated = this.sessionService.isAuthenticated;

  private readonly apiUrl = environment.apiUrl;

  googleLogin() {
    window.location.href = `${this.apiUrl}/auth/google`;
  }

  login(email: string) {
    const user: User = {
      _id: 'mock-id-' + Date.now(),
      email,
      firstName: 'User',
      lastName: '',
      picture: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    this.sessionService.setUser(user);
    this.router.navigate(['/dashboard']);
  }

  handleSocialLogin(user: User) {
    this.sessionService.setUser(user);
    this.router.navigate(['/dashboard']);
  }

  register(email: string) {
    this.login(email);
  }

  logout() {
    this.sessionService.clearSession();
    this.router.navigate(['/auth/login']);
  }
}

