import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _isSidebarOpen = signal<boolean>(false);
  
  isSidebarOpen = this._isSidebarOpen.asReadonly();

  toggleSidebar() {
    this._isSidebarOpen.update(open => !open);
  }

  openSidebar() {
    this._isSidebarOpen.set(true);
  }

  closeSidebar() {
    this._isSidebarOpen.set(false);
  }
}
