import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from '../../../../../../app/ui/container/container';
import { TitleComponent } from '../../../../../../app/ui/title/title';
import { EmptyStateComponent } from '../../../../../../app/ui/empty-state/empty-state';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clinic-settings',
  standalone: true,
  imports: [CommonModule, PageContainerComponent, TitleComponent, EmptyStateComponent],
  template: `
    <app-page-container>
      <app-title label="Configuración" size="xl"></app-title>
      <app-empty-state
        [icon]="faCog"
        title="Ajustes de Clínica"
        description="Configura horarios, servicios, datos de la empresa y más."
      ></app-empty-state>
    </app-page-container>
  `
})
export class ClinicSettingsComponent {
  faCog = faCog;
}
