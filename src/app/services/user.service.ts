import { Injectable, inject } from '@angular/core';
import { SessionService } from '../../core/services/session.service';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api';
import { UserDto } from '../core/api/models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiService = inject(ApiService);
  private sessionService = inject(SessionService);

  updateUser(id: string, userData: Partial<UserDto>): Observable<UserDto> {
    return this.apiService.patch<UserDto>(`users/${id}`, userData).pipe(
      tap(updatedUser => {
        this.sessionService.setUser(updatedUser);
      })
    );
  }

  getUser(id: string): Observable<UserDto> {
    return this.apiService.get<UserDto>(`users/${id}`);
  }

  getAllUsers(): Observable<UserDto[]> {
    return this.apiService.get<UserDto[]>(`users`);
  }

}
