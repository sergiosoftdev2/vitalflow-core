import { Directive, ElementRef, HostListener, input, inject, OnDestroy } from "@angular/core";
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { ContextMenuComponent, ContextMenuItem } from "./context-menu";
import { fromEvent, Subscription } from "rxjs";
import { filter, take } from "rxjs/operators";

@Directive({
  selector: '[appContextMenu]',
  standalone: true
})
export class ContextMenuDirective implements OnDestroy {
  private overlay = inject(Overlay);
  private elementRef = inject(ElementRef);
  private overlayRef: OverlayRef | null = null;
  private clickSubscription?: Subscription;

  appContextMenu = input<ContextMenuItem[]>([]);
  appContextMenuTrigger = input<'contextmenu' | 'click' | 'both'>('contextmenu');

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    if (this.appContextMenuTrigger() === 'click') return;
    event.preventDefault();
    this.show(event.clientX, event.clientY);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.appContextMenuTrigger() === 'contextmenu') return;
    this.show(event.clientX, event.clientY);
  }

  private show(x: number, y: number) {
    this.close();

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo({ x, y })
      .withPositions([
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
        },
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'bottom',
        }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close(),
      hasBackdrop: false, // We'll manage closing with a global listener
    });

    const portal = new ComponentPortal(ContextMenuComponent);
    const componentRef = this.overlayRef.attach(portal);
    
    componentRef.setInput('items', this.appContextMenu());
    
    // Close menu on item click
    componentRef.instance.itemClick.subscribe(() => this.close());

    // Close menu on any click outside or inside (standard menu behavior)
    setTimeout(() => {
      this.clickSubscription = fromEvent<MouseEvent>(document, 'mousedown')
        .pipe(
          filter(event => {
            const clickTarget = event.target as HTMLElement;
            return !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
          }),
          take(1)
        )
        .subscribe(() => this.close());
    });
  }

  private close() {
    this.clickSubscription?.unsubscribe();
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  ngOnDestroy() {
    this.close();
  }
}
