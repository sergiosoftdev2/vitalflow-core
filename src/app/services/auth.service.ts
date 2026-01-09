import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { SessionService } from './session.service';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private sessionService = inject(SessionService);
  private router = inject(Router);
  
  // Expose signals from session service
  currentUser = this.sessionService.user;
  isAuthenticated = this.sessionService.isAuthenticated;

  private readonly apiUrl = environment.apiUrl;

  googleLogin() {
    window.location.href = `${this.apiUrl}/auth/google`;
  }

  login(credentials: any) {
    return this.http.post<User>(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap(user => {
        this.sessionService.setUser(user);
        this.router.navigate(['/dashboard']);
      })
    );
  }

  handleSocialLogin(user: User) {
    this.sessionService.setUser(user);
    this.router.navigate(['/dashboard']);
  }

  register(userData: any) {
    return this.http.post<User>(`${this.apiUrl}/auth/register`, userData).pipe(
      tap(user => {
        this.sessionService.setUser(user);
        this.router.navigate(['/dashboard']);
      })
    );
  }

  logout() {
    this.sessionService.clearSession();
    this.router.navigate(['/auth/login']);
  }
}

