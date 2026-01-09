import { Injectable, signal, computed, inject } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly STORAGE_KEY = 'vyntal_user';
  private readonly router = inject(Router);
  
  private _user = signal<User | null>(null);
  
  user = this._user.asReadonly();
  
  isAuthenticated = computed(() => !!this._user());

  constructor() {
    this.restoreSession();
  }

  private restoreSession(): void {
    const storedUser = localStorage.getItem(this.STORAGE_KEY);
    if (storedUser) {
      try {
        const user: User = JSON.parse(storedUser);
        this._user.set(user);
      } catch (error) {
        console.error('Error restoring session:', error);
        this.clearSession();
      }
    }
  }

  setUser(user: User): void {
    this._user.set(user);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  clearSession(): void {
    this._user.set(null);
    localStorage.removeItem(this.STORAGE_KEY);
    this.router.navigate(['/login']);
  }

  getUserValue(): User | null {
    return this._user();
  }
}
