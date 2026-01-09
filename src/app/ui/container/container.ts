import { Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PAGE_CONTAINER_CLASSES } from "./container.constants";

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main [class]="containerClasses()">
      <ng-content></ng-content>
    </main>
  `,
})
export class PageContainerComponent {

  isFullSize = input<boolean>(false);

  containerClasses = computed(() => PAGE_CONTAINER_CLASSES + (this.isFullSize() ? ' h-full w-full' : 'max-w-4xl mx-auto'));
}
