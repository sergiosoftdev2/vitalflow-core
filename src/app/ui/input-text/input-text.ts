import { Component, computed, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficialColors } from '../colors.constants';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-text.html',
})
export class InputTextComponent {
  label = input<string>('');
  placeholder = input<string>('');
  id = input<string>(`input-text-${Math.random().toString(36).substr(2, 9)}`);
  disabled = input<boolean>(false);
  
  value = model<string>('');

  inputContainerClasses = 'flex flex-col gap-1.5 w-full';
  labelClasses = 'text-sm font-medium text-zinc-900 dark:text-zinc-100';
  
  inputClasses = computed(() => `
    flex h-11 w-full rounded-full border 
    bg-zinc-100 dark:bg-zinc-900 
    px-4 py-2 text-sm 
    file:border-0 file:bg-transparent file:text-sm file:font-medium 
    placeholder:text-zinc-500 dark:placeholder:text-zinc-400 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-100 dark:focus:ring-offset-zinc-900
    transition-all duration-300 ease-in-out 
    disabled:cursor-not-allowed disabled:opacity-50
    ${OfficialColors.default_border_color}
    text-zinc-900 dark:text-zinc-100
    hover:bg-zinc-200 dark:hover:bg-zinc-800
  `);

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}
