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
    'class': 'inline-block',
    '[class.rounded-full]': 'variant() === "circle"',
    '[style.view-transition-name]': 'viewTransitionName()'
  }
})
export class AvatarComponent {
  src = input<string>('');
  alt = input<string>('Avatar');
  size = input<COMPONENT_SIZE>(COMPONENT_SIZES.base);
  variant = input<AVATAR_VARIANT>(AVATAR_VARIANTS.circle);
  label = input<string>('');
  hasBorder = input<boolean>(false);
  initials = input<string>('');
  viewTransitionName = input<string>('');
  isFullSize = input<boolean>(false);

  computedInitials = computed(() => {
    if (this.initials()) return this.initials();
    if (!this.label()) return '';
    
    return this.label()
      .split(' ')
      .filter((part: string = '') => part.length > 0)
      .map((part: string) => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  });

  containerClasses = computed(() => {
    return [
      BASE_AVATAR_CLASSES,
      this.hasBorder() ? 'border-2 border-white dark:border-zinc-950' : '',
      this.isFullSize() ? 'w-full h-full' : AVATAR_SIZES[this.size()],
      AVATAR_VARIANT_CLASSES[this.variant()]
    ];
  });
}
