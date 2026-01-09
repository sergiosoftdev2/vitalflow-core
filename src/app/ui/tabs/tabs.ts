import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabItem, TabVariant } from './tabs.enum';
import { TABS_VARIANTS, TABS_BASE_CLASSES, TAB_ITEM_BASE_CLASSES } from './tabs.constants';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tabs.html'
})
export class TabsComponent {
  // Inputs
  items = input.required<TabItem[]>();
  activeId = input.required<string>();
  variant = input<TabVariant | 'fill' | 'line'>(TabVariant.FILL);

  // Outputs
  tabChange = output<string>();

  // Computed classes
  containerClasses = computed(() => [
    TABS_BASE_CLASSES,
    TABS_VARIANTS[this.variant() as TabVariant].container
  ].join(' '));

  getItemClasses(tabId: string): string {
    const isActive = this.activeId() === tabId;
    const variantConfig = TABS_VARIANTS[this.variant() as TabVariant];
    
    return [
      TAB_ITEM_BASE_CLASSES,
      variantConfig.item,
      isActive ? variantConfig.active : ''
    ].join(' ');
  }

  getBadgeClasses(tabId: string): string {
    const isActive = this.activeId() === tabId;
    const isFill = this.variant() === TabVariant.FILL;
    
    const base = "inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold rounded-full transition-colors duration-300";
    
    if (isActive && isFill) {
      return `${base} bg-white/20 text-white`;
    }
    
    if (isActive && !isFill) {
      return `${base} bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400`;
    }
    
    return `${base} bg-zinc-400/20 text-zinc-500 dark:text-zinc-400`;
  }

  onTabClick(id: string) {
    if (this.activeId() !== id) {
      this.tabChange.emit(id);
    }
  }
}
