import { Component, computed, input, ViewChild, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PAGE_CONTAINER_CLASSES } from "./container.constants";
import { TitleComponent } from "../title/title";

import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [CommonModule, TitleComponent, ScrollingModule],
  template: `
    <main #scrollContainer cdkVirtualScrollingElement [class]="containerClasses()">
      @if (title()) {
        <app-title class="sticky top-0 py-2 my-2 bg-zinc-50 transition-all duration-300 dark:bg-zinc-900 z-10" size="xl" [label]="title()"></app-title>
      }
      <ng-content></ng-content>
    </main>
  `,
})
export class PageContainerComponent {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLElement>;

  isFullSize = input<boolean>(false);
  additionalClasses = input<string>('');
  title = input<string>('');
  isOverflowHidden = input<boolean>(false)

  containerClasses = computed(() => 
    PAGE_CONTAINER_CLASSES + 
    (this.isFullSize() ? 'w-full h-[calc(100dvh-65px)] overflow-hidden' : 'max-w-4xl mx-auto min-h-0 sm:min-h-dvh') + 
    (this.isOverflowHidden() ? ' overflow-hidden ' : ' ') +
    this.additionalClasses()
  );
}
