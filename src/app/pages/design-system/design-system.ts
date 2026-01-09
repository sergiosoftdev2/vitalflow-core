import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button';
import { AvatarComponent } from '../../ui/avatar/avatar';
import { AvatarGroupComponent } from '../../ui/avatar-group/avatar-group';
import { InputSearchComponent } from '../../ui/input-search/input-search';
import { BadgeComponent } from '../../ui/badge/badge';
import { TagComponent } from '../../ui/tag/tag';
import { TooltipDirective } from '../../ui/tooltip/tooltip.directive';
import { ContextMenuDirective } from '../../ui/context-menu/context-menu.directive';
import { faEdit, faTrash, faShare, faCopy, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { SkeletonComponent } from '../../ui/skeleton/skeleton';
import { TitleComponent } from '../../ui/title/title';
import { TableComponent } from '../../ui/table/table';
import { TableColumnType } from '../../ui/table/table.enum';
import { ModalComponent } from '../../ui/modal/modal';
import { TabsComponent } from '../../ui/tabs/tabs';
import { faUser, faCog, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonComponent, 
    AvatarComponent, 
    AvatarGroupComponent, 
    InputSearchComponent,
    BadgeComponent,
    TagComponent,
    TooltipDirective,
    ContextMenuDirective,
    SkeletonComponent,
    TitleComponent,
    TableComponent,
    ModalComponent,
    TabsComponent
  ],
  templateUrl: './design-system.html',
})
export class DesignSystemComponent {
  isModalOpen = false;
  isModalWithTwoButtonsOpen = false;

  activeTab = 'perfil';
  tabItems = [
    { id: 'perfil', label: 'Mi Perfil', icon: faUser },
    { id: 'ajustes', label: 'Ajustes', icon: faCog },
    { id: 'notificaciones', label: 'Notificaciones', icon: faBell, badge: 3 },
  ];

  menuItems = [
    { label: 'Editar', icon: faEdit, action: () => console.log('Edit') },
    { label: 'Copiar', icon: faCopy, action: () => console.log('Copy') },
    { label: 'Compartir', icon: faShare, action: () => console.log('Share') },
    { separator: true },
    { label: 'Abrir en nueva pestaña', icon: faExternalLinkAlt, action: () => console.log('Open') },
    { separator: true },
    { label: 'Eliminar', icon: faTrash, action: () => console.log('Delete'), destructive: true },
  ];

  tableColumns = [
    { key: 'user', label: 'Usuario', type: TableColumnType.AVATAR },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Rol', type: TableColumnType.BADGE },
    { key: 'status', label: 'Estado', type: TableColumnType.BADGE },
    { key: 'actions', label: 'Acciones', align: 'right' as const }
  ];

  tableData = [
    { 
      user: 'https://randomuser.me/api/portraits/men/1.jpg', 
      user_label: 'Juan Pérez', 
      email: 'juan.perez@example.com', 
      role: 'Administrador', 
      status: 'Activo' 
    },
    { 
      user: 'https://randomuser.me/api/portraits/women/2.jpg', 
      user_label: 'María García', 
      email: 'maria.garcia@example.com', 
      role: 'Editor', 
      status: 'Inactivo' 
    },
    { 
      user: 'https://randomuser.me/api/portraits/men/3.jpg', 
      user_label: 'Pedro López', 
      email: 'pedro.lopez@example.com', 
      role: 'Usuario', 
      status: 'Activo' 
    }
  ];
}
