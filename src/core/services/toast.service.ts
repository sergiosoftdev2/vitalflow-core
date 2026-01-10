import { Injectable, inject, ComponentRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToastContainerComponent, ToastData } from '../../app/ui/toast/toast-container.component';
import { TOAST_TYPE } from '../../app/ui/toast/toast.enum';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private overlay = inject(Overlay);
  private overlayRef?: OverlayRef;
  private containerRef?: ComponentRef<ToastContainerComponent>;

  constructor() {}

  show(type: TOAST_TYPE, message: string, title?: string, duration: number = 4000) {
    this.ensureOverlayExists();
    
    const id = Math.random().toString(36).substring(2, 9);
    const toast: ToastData = { id, type, message, title, duration };

    this.containerRef?.instance.toasts.update(current => [...current, toast]);

    if (duration > 0) {
      setTimeout(() => {
        this.remove(id);
      }, duration);
    }
  }

  success(message: string, title: string = 'Éxito') {
    this.show(TOAST_TYPE.SUCCESS, message, title);
  }

  error(message: string, title: string = 'Error') {
    this.show(TOAST_TYPE.ERROR, message, title);
  }

  info(message: string, title: string = 'Información') {
    this.show(TOAST_TYPE.INFO, message, title);
  }

  warning(message: string, title: string = 'Advertencia') {
    this.show(TOAST_TYPE.WARNING, message, title);
  }

  remove(id: string) {
    this.containerRef?.instance.remove(id);
  }

  private ensureOverlayExists() {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        panelClass: 'pointer-events-none', // Allow clicks to pass through empty areas
        hasBackdrop: false,
        positionStrategy: this.overlay.position().global()
      });
      
      const portal = new ComponentPortal(ToastContainerComponent);
      this.containerRef = this.overlayRef.attach(portal);
    }
  }
}
