import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TOOLTIP_CLASSES } from "./tooltip.constants";

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="classes">
      {{ text() }}
    </div>
  `,
})
export class TooltipComponent {
  text = input<string>('');
  classes = TOOLTIP_CLASSES;
}
