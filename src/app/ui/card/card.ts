import { Component, computed, input, output } from "@angular/core";
import { OfficialColors } from "../colors.constants";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
})
export class CardComponent {

  addiotionalClasses = input<string>();
  isClickable = input<boolean>();
  handler = output<MouseEvent>();

  cardClass = computed<string>(() => {
    return [
      'rounded-2xl',
      'overflow-hidden',
      'p-4',
      'transition-all',
      'duration-300',
      'ease-in-out',
      'border',
      this.isClickable() ? `cursor-pointer ${OfficialColors.default_border_hover} ${OfficialColors.default_bg_hover}` : '',
      OfficialColors.default_bg_color,
      OfficialColors.default_border_color,
      OfficialColors.default_text_accent,
      this.addiotionalClasses()
    ].join(' ')
  })

  handleClick(event: MouseEvent) {
    if (this.isClickable()) {
      this.handler.emit(event);
    }
  }

}
