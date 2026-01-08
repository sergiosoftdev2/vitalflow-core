import { CommonModule } from "@angular/common";
import { Component, computed, input } from "@angular/core";
import { COMPONENT_SIZE, COMPONENT_SIZES } from "../sizes.enum";
import { AVATAR_VARIANT, AVATAR_VARIANTS } from "./avatar.enum";
import { AVATAR_SIZES, AVATAR_VARIANT_CLASSES, BASE_AVATAR_CLASSES } from "./avatar.constants";

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  host: {
    'class': 'inline-block'
  }
})
export class AvatarComponent {
  src = input<string>('');
  alt = input<string>('Avatar');
  size = input<COMPONENT_SIZE>(COMPONENT_SIZES.base);
  variant = input<AVATAR_VARIANT>(AVATAR_VARIANTS.circle);
  initials = input<string>('');

  containerClasses = computed(() => {
    return [
      BASE_AVATAR_CLASSES,
      AVATAR_SIZES[this.size()],
      AVATAR_VARIANT_CLASSES[this.variant()]
    ];
  });
}
