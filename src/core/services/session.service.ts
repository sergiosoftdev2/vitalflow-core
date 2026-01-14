import { Injectable, signal, computed, inject } from '@angular/core';
import { User } from '../../app/interfaces/user.interface';
import { Router } from '@angular/router';
import { ApiService } from '../../app/services/api';
import { Observable } from 'rxjs';
import { SessionDto } from '../../app/core/api/models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly apiService = inject(ApiService);


  private readonly STORAGE_KEY = 'vyntal_user';
  private readonly TOKEN_KEY = 'access_token';
  private readonly router = inject(Router);
  
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(null);
  
  user = this._user.asReadonly();
  token = this._token.asReadonly();
  
  isAuthenticated = computed(() => !!this._user() && !!this._token());

  constructor() {
    this.restoreSession();
  }

  getSessionsOfUser(): Observable<SessionDto[]> {
    return this.apiService.get<SessionDto[]>('sessions');
  }

  deleteSession(sessionId: string): Observable<void> {
    return this.apiService.delete<void>(`sessions/${sessionId}`);
  }

  private restoreSession(): void {
    const storedUser = localStorage.getItem(this.STORAGE_KEY);
    const storedToken = localStorage.getItem(this.TOKEN_KEY);

    if (storedUser && storedToken) {
      try {
        const user: User = JSON.parse(storedUser);
        this._user.set(user);
        this._token.set(storedToken);
      } catch (error) {
        this.clearSession();
      }
    } else {
      if (storedUser || storedToken) {
        this.clearSession();
      }
    }
  }

  setUser(user: User, access_token?: string): void {
    const finalToken = access_token || 
                      user.access_token || 
                      (user as any).token || 
                      (user as any).accessToken ||
                      (user as any).id;
    
    this._user.set(user);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    
    if (finalToken) {
      this._token.set(finalToken);
      localStorage.setItem(this.TOKEN_KEY, finalToken);
    }
  }

  clearSession(): void {
    this._user.set(null);
    this._token.set(null);
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  getUserValue(): User | null {
    return this._user();
  }

  getTokenValue(): string | null {
    return this._token();
  }
}
