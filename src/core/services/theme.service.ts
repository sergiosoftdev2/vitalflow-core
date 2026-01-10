import { Injectable, signal } from '@angular/core';
import { Theme, ThemeType } from '../../core/enums/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  activeTheme = signal<ThemeType>(Theme.LIGHT);

  constructor() {
    this.activeTheme.set(localStorage.getItem('theme') as ThemeType || Theme.LIGHT);
  }

  setTheme(theme: ThemeType) {
    this.activeTheme.set(theme);
    localStorage.setItem('theme', theme);
  }

  getTheme() {
    return this.activeTheme();
  }

  toggleTheme() {
    this.activeTheme.set(this.activeTheme() === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    localStorage.setItem('theme', this.activeTheme());
  }

}