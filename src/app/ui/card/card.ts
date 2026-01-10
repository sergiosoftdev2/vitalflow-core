import { Component, computed, input, output } from "@angular/core";
import { OfficialColors } from "../colors.constants";
import { TitleComponent } from "../title/title";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faArrowRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  imports: [TitleComponent, CommonModule, FontAwesomeModule],
})
export class CardComponent {

  title = input<string>();
  description = input<string>();
  additionalClasses = input<string>('');
  isClickable = input<boolean>(false);
  leadingIcon = input<IconDefinition>();
  trailingIcon = input<IconDefinition>();
  handler = output<MouseEvent>();

  faArrowRight = faArrowRight;

  cardClass = computed<string>(() => {
    const baseClasses = [
      'rounded-2xl',
      'overflow-hidden',
      'p-4',
      'border',
      OfficialColors.default_border_color,
      OfficialColors.default_bg_color,
      OfficialColors.default_text_accent,
      this.additionalClasses()
    ];

    if (this.isClickable()) {
      baseClasses.push(
        'cursor-pointer',
        'transition-[background-color,border-color,transform,box-shadow]',
        'duration-300',
        'ease-in-out',
        OfficialColors.default_border_hover,
        OfficialColors.default_bg_hover
      );
    }

    return baseClasses.join(' ');
  });

  handleClick(event: MouseEvent) {
    if (this.isClickable()) {
      this.handler.emit(event);
    }
  }

}
