import { Component, computed, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficialColors } from '../colors.constants';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-number.html',
})
export class InputNumberComponent {
  label = input<string>('');
  placeholder = input<string>('');
  id = input<string>(`input-number-${Math.random().toString(36).substr(2, 9)}`);
  
  value = model<number | null>(null);

  inputContainerClasses = 'flex flex-col gap-1.5 w-full';
  labelClasses = 'text-sm font-medium text-zinc-900 dark:text-zinc-100';
  
  inputClasses = computed(() => `
    flex h-10 w-full rounded-xl border 
    bg-white dark:bg-zinc-950 
    px-3 py-2 text-sm 
    file:border-0 file:bg-transparent file:text-sm file:font-medium 
    placeholder:text-zinc-500 dark:placeholder:text-zinc-400 
    focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 
    disabled:cursor-not-allowed disabled:opacity-50
    transition-colors duration-200
    ${OfficialColors.default_border_color}
    text-zinc-900 dark:text-zinc-100
  `);

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const val = target.value;
    this.value.set(val === '' ? null : Number(val));
  }
}
