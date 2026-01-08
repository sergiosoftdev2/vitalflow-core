import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl;
  

  get(endpoint: string) {
    return this.httpClient.get(`${this.apiUrl}/${endpoint}`);
  }

}
