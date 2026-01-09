import { Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MENU_CONTAINER_CLASSES, MENU_ITEM_CLASSES, MENU_SEPARATOR_CLASSES } from "./context-menu.constants";

export interface ContextMenuItem {
  label?: string;
  icon?: any;
  action?: () => void;
  separator?: boolean;
  destructive?: boolean;
}

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div [class]="containerClasses">
      @for (item of items(); track $index) {
        @if (item.separator) {
          <div [class]="separatorClasses"></div>
        } @else {
          <button 
            type="button"
            [class]="itemClasses"
            [class.text-red-500]="item.destructive"
            [class.hover:bg-red-50]="item.destructive"
            [class.dark:hover:bg-red-900\/30]="item.destructive"
            (click)="handleAction($event, item)"
          >
            @if (item.icon) {
              <fa-icon [icon]="item.icon" class="text-base opacity-70"></fa-icon>
            }
            <span>{{ item.label }}</span>
          </button>
        }
      }
    </div>
  `,
})
export class ContextMenuComponent {
  items = input<ContextMenuItem[]>([]);
  itemClick = output<ContextMenuItem>();

  containerClasses = MENU_CONTAINER_CLASSES;
  itemClasses = MENU_ITEM_CLASSES;
  separatorClasses = MENU_SEPARATOR_CLASSES;

  handleAction(event: MouseEvent, item: ContextMenuItem) {
    event.stopPropagation();
    if (item.action) item.action();
    this.itemClick.emit(item);
  }
}
