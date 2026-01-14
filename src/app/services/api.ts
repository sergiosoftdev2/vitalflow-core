import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl;
  

  get<T>(endpoint: string, params?: any) {
    return this.httpClient.get<T>(`${this.apiUrl}/${endpoint}`, { params });
  }

  set<T>(endpoint: string, data: T) {
    return this.httpClient.post<T>(`${this.apiUrl}/${endpoint}`, data);
  }

  patch<T>(endpoint: string, data: Partial<T>) {
    return this.httpClient.patch<T>(`${this.apiUrl}/${endpoint}`, data);
  }

  delete<T>(endpoint: string) {
    return this.httpClient.delete<T>(`${this.apiUrl}/${endpoint}`);
  }

}
