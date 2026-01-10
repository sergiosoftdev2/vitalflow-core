import { Injectable, inject } from '@angular/core';
import { ClinicDto } from '../../../core/api/models';
import { ApiService } from '../../../services/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {
  private readonly apiService = inject(ApiService);

  getClinicsByUser(userId: string): Observable<ClinicDto[]> {
    return this.apiService.get<ClinicDto[]>(`clinics/user/${userId}`);
  }

  createClinic(clinic: Partial<ClinicDto>): Observable<ClinicDto> {
    return this.apiService.set<ClinicDto>('clinics', clinic as ClinicDto);
  }

  getClinicById(id: string): Observable<ClinicDto> {
    return this.apiService.get<ClinicDto>(`clinics/${id}`);
  }

  updateClinic(id: string, clinic: Partial<ClinicDto>): Observable<ClinicDto> {
    return this.apiService.patch<ClinicDto>(`clinics/${id}`, clinic);
  }

  deleteClinic(id: string): Observable<ClinicDto> {
    return this.apiService.delete<ClinicDto>(`clinics/${id}`);
  }
}