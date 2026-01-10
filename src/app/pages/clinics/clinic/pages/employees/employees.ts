import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from '../../../../../../app/ui/container/container';
import { TitleComponent } from '../../../../../../app/ui/title/title';
import { EmptyStateComponent } from '../../../../../../app/ui/empty-state/empty-state';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clinic-employees',
  standalone: true,
  imports: [CommonModule, PageContainerComponent, TitleComponent, EmptyStateComponent],
  template: `
    <app-page-container>
      <app-title label="Empleados" size="xl"></app-title>
      <app-empty-state
        [icon]="faUserMd"
        title="Equipo Médico"
        description="Gestiona los empleados y profesionales sanitarios de esta clínica."
        primaryActionLabel="Añadir empleado"
      ></app-empty-state>
    </app-page-container>
  `
})
export class ClinicEmployeesComponent {
  faUserMd = faUserMd;
}
