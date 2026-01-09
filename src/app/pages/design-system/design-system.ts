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
    TitleComponent
  ],
  templateUrl: './design-system.html',
})
export class DesignSystemComponent {
  menuItems = [
    { label: 'Editar', icon: faEdit, action: () => console.log('Edit') },
    { label: 'Copiar', icon: faCopy, action: () => console.log('Copy') },
    { label: 'Compartir', icon: faShare, action: () => console.log('Share') },
    { separator: true },
    { label: 'Abrir en nueva pestaña', icon: faExternalLinkAlt, action: () => console.log('Open') },
    { separator: true },
    { label: 'Eliminar', icon: faTrash, action: () => console.log('Delete'), destructive: true },
  ];
}
