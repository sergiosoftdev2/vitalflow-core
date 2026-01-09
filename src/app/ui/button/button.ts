import { CommonModule } from "@angular/common";
import { Component, computed, input, output } from "@angular/core";
import { BUTTON_VARIANT, BUTTON_COLOR, BUTTON_COLORS, BUTTON_VARIANTS } from "./button.enum";
import { COMPONENT_SIZE, COMPONENT_SIZES } from "../sizes.enum";
import { BASE_CLASSES, filledButtonColors, coloredButtonColors, buttonSizes, buttonVariantClasses } from "./button.constants";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  imports: [CommonModule, FontAwesomeModule],
})
export class ButtonComponent {

  label = input<string>();
  leadingIcon = input<string | IconDefinition>();
  trailingIcon = input<string | IconDefinition>();
  color = input<BUTTON_COLOR>(BUTTON_COLORS.primary);
  variant = input<BUTTON_VARIANT>(BUTTON_VARIANTS.filled);
  size = input<COMPONENT_SIZE>(COMPONENT_SIZES.base);
  isFullWidth = input<boolean>(false);
  isBold = input<boolean>(false);

  handler = output<MouseEvent>();

  buttonClasses = computed(() => {
    const color = this.color();
    const variant = this.variant();
    const size = this.size();

    const colorClasses = variant === BUTTON_VARIANTS.filled 
      ? filledButtonColors[color] 
      : coloredButtonColors[color];

    return [
      BASE_CLASSES,
      colorClasses,
      buttonVariantClasses[variant],
      buttonSizes[size],
      this.isFullWidth() ? 'w-full' : '',
      this.isBold() ? 'font-bold' : 'font-medium'
    ]
  })

  isIconDefinition(icon: string | IconDefinition | undefined): icon is IconDefinition {
    return typeof icon === 'object' && icon !== null && 'iconName' in icon;
  }

  onHandlerClick(event: MouseEvent) {
    this.handler.emit(event);
  }

}