import { Injectable, signal } from '@angular/core';
import { SidebarItem } from '../ui/sidebar/sidebar.enum';
import { 
  faChartPie, 
  faBuilding, 
  faCalendar, 
  faChartLine, 
  faUsersBetweenLines, 
  faWallet
} from '@fortawesome/free-solid-svg-icons';

const DEFAULT_SIDEBAR_ITEMS: SidebarItem[] = [
  { label: 'Vista general', icon: faChartPie, route: '/dashboard' },
  { label: 'Mis clínicas', icon: faBuilding, route: '/dashboard/clinics' },
  { label: 'Design System', icon: faCalendar, route: '/dashboard/design-system' },
  { label: 'Monedero General', icon: faWallet, route: '/dashboard/wallet' },
  { 
    label: 'Informes', 
    icon: faChartLine, 
    route: '/dashboard/branding',
    badge: { value: 'New', color: 'success' }
  },
];

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  private readonly _items = signal<SidebarItem[]>(DEFAULT_SIDEBAR_ITEMS);

  readonly items = this._items.asReadonly();
  readonly isCustomState = signal<boolean>(false);

  setItems(items: SidebarItem[]) {
    this._items.set(items);
    this.isCustomState.set(true);
  }

  reset() {
    this._items.set(DEFAULT_SIDEBAR_ITEMS);
    this.isCustomState.set(false);
  }



  updateItem(index: number, item: SidebarItem) {
    this._items.update(items => {
      const newItems = [...items];
      if (index >= 0 && index < newItems.length) {
        newItems[index] = item;
      }
      return newItems;
    });
  }

  addItem(item: SidebarItem) {
    this._items.update(items => [...items, item]);
  }

  removeItem(index: number) {
    this._items.update(items => items.filter((_, i) => i !== index));
  }
}
