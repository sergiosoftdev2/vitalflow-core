import { Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PAGE_CONTAINER_CLASSES } from "./container.constants";
import { TitleComponent } from "../title/title";

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <main [class]="containerClasses()">
      <app-title class="sticky top-0 py-2 my-2 bg-zinc-900 z-10" size="xl" [label]="title()"></app-title>
      <ng-content></ng-content>
    </main>
  `,
})
export class PageContainerComponent {

  isFullSize = input<boolean>(false);
  additionalClasses = input<string>('');
  title = input<string>('');
  isOverflowHidden = input<boolean>(false)

  containerClasses = computed(() => 
    PAGE_CONTAINER_CLASSES + 
    (this.isFullSize() ? ' h-dvh w-full' : 'max-w-4xl mx-auto min-h-0 sm:min-h-dvh') + 
    (this.isOverflowHidden() ? ' overflow-hidden ' : ' ') +
    this.additionalClasses()
  );
}
