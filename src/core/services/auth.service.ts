import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { SessionService } from './session.service';
import { User } from '../../app/interfaces/user.interface';
import { LoginDto, RegisterDto } from '../../app/core/api/models';

interface AuthResponse {
  access_token: string;
  user: User;
}

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

  login(credentials: LoginDto) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap(response => {
        this.sessionService.setUser(response.user, response.access_token);
        this.router.navigate(['/dashboard']);
      })
    );
  }

  handleSocialLogin(user: User, access_token?: string) {
    this.sessionService.setUser(user, access_token);
    this.router.navigate(['/dashboard']);
  }

  register(userData: RegisterDto) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, userData).pipe(
      tap(response => {
        this.sessionService.setUser(response.user, response.access_token);
        this.router.navigate(['/dashboard']);
      })
    );
  }

  logout() {
    this.sessionService.clearSession();
    this.router.navigate(['/auth/login']);
  }
}

