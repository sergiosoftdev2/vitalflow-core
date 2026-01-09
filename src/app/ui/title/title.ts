import { CommonModule } from "@angular/common";
import { Component, computed, input } from "@angular/core";
import { TITLE_SIZE, TITLE_SIZES, TITLE_WEIGHT, TITLE_WEIGHTS } from "./title.enum";
import { TITLE_BASE_CLASSES, TITLE_SIZE_CLASSES, TITLE_WEIGHT_CLASSES } from "./title.constants";

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (label()) {
      {{ label() }}
    } @else {
      <ng-content></ng-content>
    }
  `,
  host: {
    '[class]': 'titleClasses()',
    'class': 'block'
  }
})
export class TitleComponent {
  label = input<string>();
  size = input<TITLE_SIZE>(TITLE_SIZES.lg);
  weight = input<TITLE_WEIGHT>(TITLE_WEIGHTS.bold);
  isPrimary = input<boolean>(false);

  titleClasses = computed(() => {
    const classes = [
      TITLE_BASE_CLASSES,
      TITLE_SIZE_CLASSES[this.size()] || TITLE_SIZE_CLASSES.lg,
      TITLE_WEIGHT_CLASSES[this.weight()] || TITLE_WEIGHT_CLASSES.bold,
      this.isPrimary() ? 'text-green-600 dark:text-green-500' : ''
    ];
    return classes.filter(Boolean).join(' ');
  });
}
