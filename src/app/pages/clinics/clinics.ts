import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { PageContainerComponent } from '../../ui/container/container';
import { TitleComponent } from '../../ui/title/title';
import { ClinicsService } from './services/clinics.service';
import { ClinicDto } from '../../core/api/models';
import { SessionService } from '../../../core/services/session.service';
import { EmptyStateComponent } from '../../ui/empty-state/empty-state';
import { CreateClinicModalComponent } from './components/create-clinic-modal/create-clinic-modal';
import { faBuilding, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../../ui/card/card';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.html',
  standalone: true,
  imports: [CommonModule, PageContainerComponent, TitleComponent, EmptyStateComponent, CreateClinicModalComponent, CardComponent]
})
export class ClinicsComponent {
  private readonly clinicService = inject(ClinicsService);
  private readonly sessionService = inject(SessionService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected myClinics: ClinicDto[] = [];
  protected isLoading = signal(false);
  protected isCreateModalOpen = signal(false);
  
  // ICONS
  protected faBuilding = faBuilding;
  protected faPlus = faPlus;

  ngOnInit() {
    this.clinicService.getClinicsByUser(this.sessionService.getUserValue()?._id!).subscribe((clinics) => {
      this.myClinics = clinics;
      this.isLoading.set(true);
    });
  }

  navigateToClinic(clinic: ClinicDto) {
    this.router.navigate([(clinic as any)._id], { relativeTo: this.route });
  }

}