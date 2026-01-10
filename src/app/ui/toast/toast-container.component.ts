import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast';
import { TOAST_TYPE, TOAST_POSITION } from './toast.enum';
import { animate, style, transition, trigger, query, stagger } from '@angular/animations';

export interface ToastData {
  id: string;
  type: TOAST_TYPE;
  message: string;
  title?: string;
  duration?: number;
}

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  template: `
    <div class="flex flex-col gap-3 pointer-events-none p-6 fixed z-[200]" 
         [class.top-0]="isTop()" 
         [class.bottom-0]="isBottom()" 
         [class.left-0]="isLeft()" 
         [class.right-0]="isRight()"
         [class.items-center]="isCenter()"
         [class.items-start]="isLeft()"
         [class.items-end]="isRight()"
    >
      @for (toast of toasts(); track toast.id) {
        <app-toast 
          @toastAnimation
          [type]="toast.type" 
          [title]="toast.title || ''" 
          [message]="toast.message" 
          (onClose)="remove(toast.id)"
        ></app-toast>
      }
    </div>
  `,
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px) scale(0.95)' }),
        animate('300ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class ToastContainerComponent {
  toasts: WritableSignal<ToastData[]> = signal([]);
  position = signal<TOAST_POSITION>(TOAST_POSITION.BOTTOM_RIGHT);

  remove(id: string) {
    this.toasts.update(current => current.filter(t => t.id !== id));
  }

  isTop() { return this.position().includes('top'); }
  isBottom() { return this.position().includes('bottom'); }
  isLeft() { return this.position().includes('left'); }
  isRight() { return this.position().includes('right'); }
  isCenter() { return this.position().includes('center'); }
}
