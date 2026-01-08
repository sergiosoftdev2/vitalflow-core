import { Directive, ElementRef, HostListener, input, inject, OnDestroy } from "@angular/core";
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { TooltipComponent } from "./tooltip.component";

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective implements OnDestroy {
  private overlay = inject(Overlay);
  private elementRef = inject(ElementRef);
  private overlayRef: OverlayRef | null = null;

  appTooltip = input<string>('');

  @HostListener('mouseenter')
  show() {
    if (this.overlayRef || !this.appTooltip()) return;

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -8
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 8
        }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    const tooltipPortal = new ComponentPortal(TooltipComponent);
    const tooltipRef = this.overlayRef.attach(tooltipPortal);
    tooltipRef.setInput('text', this.appTooltip());
  }

  @HostListener('mouseleave')
  hide() {
    this.destroy();
  }

  ngOnDestroy() {
    this.destroy();
  }

  private destroy() {
    const ref = this.overlayRef;
    if (ref) {
      ref.detach();
      ref.dispose();
      this.overlayRef = null;
    }
  }
}
