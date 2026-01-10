import { CommonModule } from "@angular/common";
import { Component, computed, input, output } from "@angular/core";
import { TITLE_SIZE, TITLE_SIZES, TITLE_WEIGHT, TITLE_WEIGHTS } from "./title.enum";
import { TITLE_BASE_CLASSES, TITLE_SIZE_CLASSES, TITLE_WEIGHT_CLASSES } from "./title.constants";
import { ButtonComponent } from "../button/button";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { BUTTON_VARIANTS, BUTTON_VARIANT } from "../button/button.enum";

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './title.html',
  host: {
    'class': 'block w-full'
  }
})
export class TitleComponent {
  label = input<string>();
  size = input<TITLE_SIZE>(TITLE_SIZES.lg);
  weight = input<TITLE_WEIGHT>(TITLE_WEIGHTS.bold);
  isPrimary = input<boolean>(false);

  // Action Button Inputs
  actionLabel = input<string>();
  actionIcon = input<IconDefinition>();
  actionVariant = input<BUTTON_VARIANT>(BUTTON_VARIANTS.filled);
  
  // Action Output
  action = output<void>();

  textClasses = computed(() => {
    const classes = [
      TITLE_BASE_CLASSES,
      TITLE_SIZE_CLASSES[this.size()] || TITLE_SIZE_CLASSES.lg,
      TITLE_WEIGHT_CLASSES[this.weight()] || TITLE_WEIGHT_CLASSES.bold,
      this.isPrimary() ? 'text-green-600 dark:text-green-500' : ''
    ];
    return classes.filter(Boolean).join(' ');
  });

  onAction(event: MouseEvent) {
    event.stopPropagation();
    this.action.emit();
  }
}
