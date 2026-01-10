import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faTimes, faExclamationTriangle, faInfoCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { TOAST_TYPE } from './toast.enum';
import { BASE_TOAST_CLASSES, TOAST_ICON_CONTAINER_CLASSES, TOAST_TYPE_COLORS } from './toast.constants';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './toast.html',
})
export class ToastComponent {
  type = input<TOAST_TYPE>(TOAST_TYPE.INFO);
  title = input<string>('');
  message = input.required<string>();
  
  onClose = output<void>();

  // Icon mapping
  faTimes = faXmark;
  
  icon = computed(() => {
    switch(this.type()) {
      case TOAST_TYPE.SUCCESS: return faCheck;
      case TOAST_TYPE.ERROR: return faTimes;
      case TOAST_TYPE.WARNING: return faExclamationTriangle;
      case TOAST_TYPE.INFO: return faInfoCircle;
      default: return faInfoCircle;
    }
  });

  // Styles
  toastClasses = computed(() => BASE_TOAST_CLASSES);
  iconContainerClasses = computed(() => TOAST_ICON_CONTAINER_CLASSES);
  iconColorClass = computed(() => TOAST_TYPE_COLORS[this.type()]);

  close() {
    this.onClose.emit();
  }
}
