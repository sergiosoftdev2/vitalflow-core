import { Component, computed, input, signal } from "@angular/core";
import { OfficialColors } from "../colors.constants";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
})
export class CardComponent {

  addiotionalClasses = input<string>();

  cardClass = computed<string>(() => {
    return [
      'rounded-2xl',
      'overflow-hidden',
      'p-4',
      'transition-all',
      'duration-300',
      'ease-in-out',
      'border',
      OfficialColors.default_bg_color,
      OfficialColors.default_border_color,
      this.addiotionalClasses()
    ].join(' ')
  })
}
