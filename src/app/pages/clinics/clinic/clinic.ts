import { Component, inject } from "@angular/core";
import { PageContainerComponent } from "../../../ui/container/container";
import { TitleComponent } from "../../../ui/title/title";
import { CardComponent } from "../../../ui/card/card";
import { SidebarService } from "../../../services/sidebar.service";
import { faCalendar, faChartArea, faCog, faUsers } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute } from "@angular/router";

import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.html',
  standalone: true,
  imports: [RouterOutlet]
})
export class ClinicComponent {
  private readonly sidebarService = inject(SidebarService);
  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
    const clinicId = this.route.snapshot.paramMap.get('id');
    const baseUrl = `/dashboard/clinics/${clinicId}`;

    this.sidebarService.setItems([
      {
        label: 'Citas',
        icon: faCalendar,
        route: `${baseUrl}/schedule`
      },
      {
        label: 'Clientes',
        icon: faUsers,
        route: `${baseUrl}/clients`
      },
      {
        label: 'Informes',
        icon: faChartArea,
        route: `${baseUrl}/reports`
      },
      {
        label: 'Facturas',
        icon: faChartArea,
        route: `${baseUrl}/invoices`
      },
      {
        label: 'Configuración',
        icon: faCog,
        route: `${baseUrl}/profile`
      }
    ]);
  }

  ngOnDestroy() {
    this.sidebarService.reset();
  }
}