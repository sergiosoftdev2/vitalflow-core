import { CommonModule } from "@angular/common";
import { Component, computed, input, output } from "@angular/core";
import { BUTTON_VARIANT, BUTTON_COLOR, BUTTON_COLORS, BUTTON_VARIANTS } from "./button.enum";
import { COMPONENT_SIZE, COMPONENT_SIZES } from "../sizes.enum";
import { BASE_CLASSES, filledButtonColors, coloredButtonColors, buttonSizes, buttonVariantClasses } from "./button.constants";

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  imports: [CommonModule],
})
export class ButtonComponent {

  label = input<string>();
  leadingIcon = input<string>();
  trailingIcon = input<string>();
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

  onHandlerClick(event: MouseEvent) {
    this.handler.emit(event);
  }

}