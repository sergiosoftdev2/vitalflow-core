import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../button/button';
import { TitleComponent } from '../title/title';
import * as Constants from './modal.constants';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ButtonComponent, TitleComponent],
  templateUrl: './modal.html',
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95) translateY(10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'scale(0.95) translateY(10px)' }))
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

  onClose() {
    this.close.emit();
  }

  onPrimaryAction() {
    this.primaryAction.emit();
  }

  onSecondaryAction() {
    this.secondaryAction.emit();
  }

  // Prevent click propagation inside the modal
  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
