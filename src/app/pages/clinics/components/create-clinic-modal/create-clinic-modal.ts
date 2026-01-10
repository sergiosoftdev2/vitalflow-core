import { Component, inject, model, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../ui/modal/modal';
import { InputTextComponent } from '../../../../ui/input-text/input-text';
import { ClinicsService } from '../../services/clinics.service';
import { SessionService } from '../../../../../core/services/session.service';
import { ToastService } from '../../../../../core/services/toast.service';
import { ClinicDto } from '../../../../core/api/models';

@Component({
  selector: 'app-create-clinic-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent, InputTextComponent],
  templateUrl: './create-clinic-modal.html',
})
export class CreateClinicModalComponent {
  private readonly clinicService = inject(ClinicsService);
  private readonly sessionService = inject(SessionService);
  private readonly toastService = inject(ToastService);

  isOpen = model.required<boolean>();
  clinicCreated = output<void>();

  name = signal('');
  address = signal('');
  
  isLoading = signal(false);

  onSubmit() {
    if (!this.name() || !this.address()) {
      this.toastService.error('Por favor completa los campos requeridos');
      return;
    }

    this.isLoading.set(true);

    const currentUser = this.sessionService.getUserValue();

    const clinicData: Partial<ClinicDto> = {
      name: this.name(),
      address: this.address(),
      email: currentUser?.email || '',
      openingHours: '09:00',
      closingHours: '18:00',
      logo: 'https://placehold.co/400',
      adminIds: [currentUser?._id!],
      employeeIds: [],
      rooms: []
    };

    this.clinicService.createClinic(clinicData as any).subscribe({
      next: () => {
        this.toastService.success('Clínica creada exitosamente');
        this.clinicCreated.emit();
        this.resetForm();
        this.isOpen.set(false);
      },
      error: (err) => {
        console.error(err);
        this.toastService.error('Error al crear la clínica');
        this.isLoading.set(false);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  resetForm() {
    this.name.set('');
    this.address.set('');
  }
}
