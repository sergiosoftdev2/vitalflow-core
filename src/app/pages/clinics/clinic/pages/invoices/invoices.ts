import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from '../../../../../../app/ui/container/container';
import { TitleComponent } from '../../../../../../app/ui/title/title';
import { EmptyStateComponent } from '../../../../../../app/ui/empty-state/empty-state';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clinic-invoices',
  standalone: true,
  imports: [CommonModule, PageContainerComponent, TitleComponent, EmptyStateComponent],
  template: `
    <app-page-container>
      <app-title label="Facturación" size="xl"></app-title>
      <app-empty-state
        [icon]="faFileInvoiceDollar"
        title="Facturas y Pagos"
        description="Gestiona la facturación y cobros de tu clínica desde aquí."
        primaryActionLabel="Nueva factura"
      ></app-empty-state>
    </app-page-container>
  `
})
export class ClinicInvoicesComponent {
  faFileInvoiceDollar = faFileInvoiceDollar;
}
