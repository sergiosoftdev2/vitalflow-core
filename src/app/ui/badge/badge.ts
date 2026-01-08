import { CommonModule } from "@angular/common";
import { Component, computed, input } from "@angular/core";
import { BADGE_COLOR, BADGE_COLORS, BADGE_VARIANT, BADGE_VARIANTS } from "./badge.enum";
import { BADGE_BASE_CLASSES, BADGE_COLOR_CLASSES, BADGE_SHAPES } from "./badge.constants";

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<span [ngClass]="classes()"><ng-content></ng-content></span>`
})
export class BadgeComponent {
  variant = input<BADGE_VARIANT>(BADGE_VARIANTS.filled);
  color = input<BADGE_COLOR>(BADGE_COLORS.primary);
  shape = input<'circle' | 'pill'>('pill');

  classes = computed(() => {
    return [
      BADGE_BASE_CLASSES,
      BADGE_SHAPES[this.shape()],
      BADGE_COLOR_CLASSES[this.variant()][this.color()]
    ];
  });
}
