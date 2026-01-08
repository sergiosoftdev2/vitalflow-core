import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button';
import { AvatarComponent } from '../../ui/avatar/avatar';
import { AvatarGroupComponent } from '../../ui/avatar-group/avatar-group';
import { InputSearchComponent } from '../../ui/input-search/input-search';
import { BadgeComponent } from '../../ui/badge/badge';
import { TagComponent } from '../../ui/tag/tag';
import { TooltipDirective } from '../../ui/tooltip/tooltip.directive';

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
    TooltipDirective
  ],
  templateUrl: './design-system.html',
})
export class DesignSystemComponent {

}
