import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKELETON_TYPE, SKELETON_TYPES } from './skeleton.enum';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton.html',
})
export class SkeletonComponent {
  type = input<SKELETON_TYPE>(SKELETON_TYPES.rectangle);
  width = input<string>('100%');
  height = input<string>('1rem');
  count = input<number>(1);
  
  rows = input<number>(6);
  cols = input<number>(4);

  skeletonClasses = computed(() => {
    const base = 'animate-skeleton-shimmer';
    switch (this.type()) {
      case 'circle': return `${base} rounded-full`;
      case 'text': return `${base} rounded-lg`;
      case 'rectangle': return `${base} rounded-2xl`;
      default: return base;
    }
  });

  generateArray(n: number): number[] {
    return Array(n).fill(0).map((_, i) => i);
  }
}
