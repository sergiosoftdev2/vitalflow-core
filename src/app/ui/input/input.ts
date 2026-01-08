import { Component, computed, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficialColors } from '../colors.constants';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.html',
})
export class InputComponent {
  label = input<string>('');
  type = input<string>('text');
  placeholder = input<string>('');
  id = input<string>(`input-${Math.random().toString(36).substr(2, 9)}`);
  
  value = model<string | number | null>('');

  inputContainerClasses = 'flex flex-col gap-1.5 w-full';
  labelClasses = 'text-sm font-medium text-zinc-900 dark:text-zinc-100';
  
  inputClasses = computed(() => `
    flex h-10 w-full rounded-full border 
    bg-white dark:bg-zinc-950 
    px-3 py-2 text-sm 
    file:border-0 file:bg-transparent file:text-sm file:font-medium 
    placeholder:text-zinc-500 dark:placeholder:text-zinc-400 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-50 dark:focus:ring-offset-zinc-950
    transition-all duration-200 ease-in-out 
    disabled:cursor-not-allowed disabled:opacity-50
    ${OfficialColors.default_border_color}
    text-zinc-900 dark:text-zinc-100
  `);

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}
