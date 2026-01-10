import { Component, computed, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../button/button';
import { TitleComponent } from '../title/title';
import * as Constants from './modal.constants';
import { ViewportService } from '../../core/services/viewport.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ButtonComponent, TitleComponent],
  templateUrl: './modal.html',
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('400ms cubic-bezier(0.25, 1, 0.5, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(0.25, 1, 0.5, 1)', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('backdropAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ModalComponent {
  private readonly viewportService = inject(ViewportService);

  // Inputs using Signals API
  isOpen = input.required<boolean>();
  title = input<string>();
  description = input<string>();
  primaryActionLabel = input<string>();
  secondaryActionLabel = input<string>();
  
  // Outputs
  close = output<void>();
  primaryAction = output<void>();
  secondaryAction = output<void>();

  // Icons
  faTimes = faTimes;

  // Computed classes
  backdropClasses = computed(() => Constants.MODAL_BACKDROP_CLASSES);
  containerClasses = computed(() => Constants.MODAL_CONTAINER_CLASSES);
  bodyClasses = computed(() => Constants.MODAL_BODY_CLASSES);
  headerClasses = computed(() => Constants.MODAL_HEADER_CLASSES);
  contentClasses = computed(() => Constants.MODAL_CONTENT_CLASSES);
  footerClasses = computed(() => Constants.MODAL_FOOTER_CLASSES);
  closeBtnClasses = computed(() => Constants.CLOSE_BUTTON_CLASSES);

  isMobile = computed(() => this.viewportService.isMobile());

  // Drag state for bottom sheet
  isDragging = signal(false);
  dragY = signal(0);
  dragOpacity = computed(() => {
    const y = this.dragY();
    if (y <= 0) return 1;
    // Over 400px of drag, opacity goes to 0
    return Math.max(0, 1 - (y / 400));
  });
  dragBlur = computed(() => {
    const y = this.dragY();
    if (y <= 0) return 8; // Initial blur-sm is usually around 4-8px
    // Over 400px of drag, blur goes to 0
    return Math.max(0, 8 - (y / 50));
  });
  private startY = 0;
  private readonly CLOSE_THRESHOLD = 150;

  onClose() {
    this.dragY.set(0);
    this.close.emit();
  }

  onPrimaryAction() {
    this.primaryAction.emit();
  }

  onSecondaryAction() {
    this.secondaryAction.emit();
  }

  // Touch handlers for drag-to-dismiss
  onTouchStart(event: TouchEvent) {
    if (window.innerWidth >= 640) return; // Only for mobile
    this.startY = event.touches[0].clientY;
    this.isDragging.set(true);
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging()) return;
    
    const currentY = event.touches[0].clientY;
    const deltaY = currentY - this.startY;
    
    // Only allow dragging downwards
    if (deltaY > 0) {
      this.dragY.set(deltaY);
    }
  }

  onTouchEnd() {
    if (!this.isDragging()) return;
    
    if (this.dragY() > this.CLOSE_THRESHOLD) {
      this.onClose();
    } else {
      // Snap back
      this.dragY.set(0);
    }
    this.isDragging.set(false);
  }

  // Prevent click propagation inside the modal
  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
