import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { SessionService } from '../../core/services/session.service';
import { tap } from 'rxjs';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiService = inject(ApiService);
  private sessionService = inject(SessionService);

  updateUser(id: string, userData: Partial<User>) {
    return this.apiService.patch<User>(`users/${id}`, userData).pipe(
      tap(updatedUser => {
        this.sessionService.setUser(updatedUser);
      })
    );
  }

  getUser(id: string) {
    return this.apiService.get<User>(`users/${id}`);
  }

  getAllUsers() {
    return this.apiService.get<User[]>(`users`);
  }

}
