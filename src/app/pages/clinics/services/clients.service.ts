import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../services/api';
import { ClientDto } from '../../../core/api/models';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private readonly apiService = inject(ApiService);

  createClinicClient(client: ClientDto) {
    return this.apiService.set<ClientDto>('clients', client);
  }

  findAllClinicClients(clinicId: string) {
    return this.apiService.get<ClientDto[]>(`clients?clinicId=${clinicId}`);
  }

  findOne(id: string) {
    return this.apiService.get<ClientDto>(`clients/${id}`);
  }

  updateClinicClient(id: string, client: Partial<ClientDto>) {
    return this.apiService.patch<ClientDto>(`clients/${id}`, client);
  }

  removeClinicClient(id: string) {
    return this.apiService.delete<ClientDto>(`clients/${id}`);
  }

}