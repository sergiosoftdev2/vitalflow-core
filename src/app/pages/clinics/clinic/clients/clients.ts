import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal, TemplateRef, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageContainerComponent } from "../../../../ui/container/container";
import { TableColumn, TableComponent } from "../../../../ui/table/table";
import { ClientsService } from '../../services/clients.service';
import { ClientDto } from '../../../../core/api/models';
import { ButtonComponent } from "../../../../ui/button/button";
import { faTable, faList, faPlus, faPhone, faEnvelope, faMapMarkerAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { AvatarComponent } from "../../../../ui/avatar/avatar";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-clinic-clients',
  standalone: true,
  templateUrl: './clients.html',
  imports: [CommonModule, PageContainerComponent, TableComponent, ButtonComponent, AvatarComponent, FontAwesomeModule, ScrollingModule]
})
export class ClinicClientsComponent {
  @ViewChild('profile') profileTemplate!: TemplateRef<any>;
  @ViewChild(PageContainerComponent, { static: true }) pageContainer!: PageContainerComponent;

  private readonly route = inject(ActivatedRoute);
  private readonly clientsService = inject(ClientsService);

  protected readonly faTable = faTable;
  protected readonly faList = faList;
  protected readonly faPlus = faPlus;
  protected readonly faPhone = faPhone;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faMapMarkerAlt = faMapMarkerAlt;
  protected readonly faEllipsisV = faEllipsisV;

  viewMode = signal<'table' | 'list'>('table');
  private containerWidth = signal<number>(0);
  private resizeObserver!: ResizeObserver;

  protected columnsCount = computed(() => {
    const width = this.containerWidth();
    if (width === 0) return 3; // Default
    if (width < 600) return 1;
    if (width < 900) return 2;
    return 3;
  });

  toggleViewMode() {
    this.viewMode.update(v => v === 'table' ? 'list' : 'table');
  }

  clients = signal<ClientDto[]>([]);
  
  protected chunkedClients = computed(() => {
    const data = this.clients();
    const size = this.columnsCount();
    const chunks = [];
    for (let i = 0; i < data.length; i += size) {
      chunks.push(data.slice(i, i + size));
    }
    return chunks;
  });

  columnDefs = signal<TableColumn[]>([]);

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const clinicId = params['id'];

      if (clinicId) {
        this.loadClients(clinicId);
      }
    });
  }

  ngAfterViewInit() {
    // Observe container size
    if (this.pageContainer && this.pageContainer.scrollContainer) {
      this.resizeObserver = new ResizeObserver(entries => {
        this.containerWidth.set(entries[0].contentRect.width);
      });
      this.resizeObserver.observe(this.pageContainer.scrollContainer.nativeElement);
    }

    this.columnDefs.set([
      {
        key: 'profile',
        label: 'Perfil',
        template: this.profileTemplate,
        width: '300px'
      },
      {
        key: 'lastName',
        label: 'Apellido',
        width: '150px'
      }, 
      {
        key: 'phone',
        label: 'Telefono',
        width: '150px'
      },
      {
        key: 'address',
        label: 'Direccion',
        width: '200px'
      },
      {
        key: 'notes',
        label: 'Notas Adicionales',
        width: '200px'
      }
    ]);
  }

  loadClients(id: string) {
    this.clientsService.findAllClinicClients(id).subscribe((clients) => {
      this.clients.set(clients);
    });
  }
}
