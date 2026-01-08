import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = signal<{ name: string; email: string } | null>(null);

  private readonly apiUrl = environment.apiUrl;

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('vyntal_user');
    if (storedUser) {
      this.currentUser.set(JSON.parse(storedUser));
    }
  }

  googleLogin() {
    window.location.href = `${this.apiUrl}/google`;
  }

  login(email: string) {
    const user = { name: 'Vyntal User', email };
    this.currentUser.set(user);
    localStorage.setItem('vyntal_user', JSON.stringify(user));
    this.router.navigate(['/dashboard']);
  }

  register(email: string) {
    this.login(email);
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('vyntal_user');
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return this.currentUser() !== null;
  }
}
