import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../button/button';
import { EMPTY_STATE_SIZES, EMPTY_STATE_SIZE } from './empty-state.enum';
import { BASE_CLASSES, SIZE_VARIANTS, ICON_SIZES, ICON_CONTAINER_CLASSES, TEXT_STYLES } from './empty-state.constants';
import { OfficialColors } from "../colors.constants";

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ButtonComponent],
  templateUrl: './empty-state.html',
})
export class EmptyStateComponent {
  // Content inputs
  title = input.required<string>();
  description = input<string>();
  icon = input.required<IconDefinition>();

  // Configuration inputs
  size = input<EMPTY_STATE_SIZE>(EMPTY_STATE_SIZES.md);
  
  // Action inputs (optional)
  primaryActionLabel = input<string>();
  secondaryActionLabel = input<string>();
  
  primaryActionIcon = input<IconDefinition>();
  secondaryActionIcon = input<IconDefinition>();

  // Outputs
  primaryAction = output<void>();
  secondaryAction = output<void>();

  // Computed classes
  containerClasses = computed(() => {
    return [
      BASE_CLASSES, 
      SIZE_VARIANTS[this.size()],
      OfficialColors.default_border_color
    ].join(' ');
  });

  iconContainerClasses = computed(() => [
    ICON_CONTAINER_CLASSES,
    ICON_SIZES[this.size()]
  ].join(' '));

  textStyles = TEXT_STYLES;

  onPrimaryClick() {
    this.primaryAction.emit();
  }

  onSecondaryClick() {
    this.secondaryAction.emit();
  }
}
