import { Injectable, signal } from '@angular/core';
import { SidebarItem } from '../ui/sidebar/sidebar.enum';
import { 
  faChartPie, 
  faBuilding, 
  faCalendar, 
  faChartLine, 
  faUsersBetweenLines 
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  private readonly _items = signal<SidebarItem[]>([
    { label: 'Vista general', icon: faChartPie, route: '/dashboard' },
    { label: 'Mis clínicas', icon: faBuilding, route: '/dashboard/clinics' },
    { label: 'Design System', icon: faCalendar, route: '/dashboard/design-system' },
    { label: 'Agenda', icon: faCalendar, route: '/dashboard/schedule' },
    { 
      label: 'Informes', 
      icon: faChartLine, 
      route: '/dashboard/branding',
      badge: { value: 'New', color: 'success' }
    },
    { label: 'Clientes', icon: faUsersBetweenLines, route: '/dashboard/clients' }
  ]);

  readonly items = this._items.asReadonly();

  setItems(items: SidebarItem[]) {
    this._items.set(items);
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
