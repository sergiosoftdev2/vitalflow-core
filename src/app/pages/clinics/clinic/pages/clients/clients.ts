import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from '../../../../../../app/ui/container/container';
import { TitleComponent } from '../../../../../../app/ui/title/title';
import { EmptyStateComponent } from '../../../../../../app/ui/empty-state/empty-state';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clinic-clients',
  standalone: true,
  imports: [CommonModule, PageContainerComponent, TitleComponent, EmptyStateComponent],
  template: `
    <app-page-container>
      <app-title label="Clientes" size="xl"></app-title>
      <app-empty-state
        [icon]="faUsers"
        title="Gestión de Clientes"
        description="Aquí podrás administrar la base de datos de tus pacientes/clientes."
        primaryActionLabel="Añadir cliente"
      ></app-empty-state>
    </app-page-container>
  `
})
export class ClinicClientsComponent {
  faUsers = faUsers;
}
