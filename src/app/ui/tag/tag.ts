import { CommonModule } from "@angular/common";
import { Component, computed, input, output } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { TAG_COLOR, TAG_COLORS, TAG_VARIANT, TAG_VARIANTS } from "./tag.enum";
import { TAG_BASE_CLASSES, TAG_COLOR_CLASSES } from "./tag.constants";

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tag.html'
})
export class TagComponent {
  variant = input<TAG_VARIANT>(TAG_VARIANTS.subtle);
  color = input<TAG_COLOR>(TAG_COLORS.primary);
  removable = input<boolean>(false);
  
  onRemove = output<void>();

  faTimes = faTimes;

  classes = computed(() => {
    return [
      TAG_BASE_CLASSES,
      TAG_COLOR_CLASSES[this.variant()][this.color()]
    ];
  });

  remove(event: MouseEvent) {
    event.stopPropagation();
    this.onRemove.emit();
  }
}
