import { Injectable, OnDestroy, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportService implements OnDestroy {
  
  isMobile = signal<boolean>(false);

  private mediaQuery: MediaQueryList | undefined;
  private readonly listener = (e: MediaQueryListEvent) => this.isMobile.set(e.matches);

  constructor() {
    this.init();
  }

  private init() {
    if (typeof window !== 'undefined') {
      this.mediaQuery = window.matchMedia('(max-width: 768px)');
      
      this.isMobile.set(this.mediaQuery.matches);

      this.mediaQuery.addEventListener('change', this.listener);
    }
  }

  ngOnDestroy() {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.listener);
    }
  }
}
