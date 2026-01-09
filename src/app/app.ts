import { Component, effect, HostListener, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { Theme } from './enums/theme.enum';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly themeService = inject(ThemeService);


  protected readonly title = signal('vyntal-core');
  protected readonly theme = this.themeService.activeTheme;

  constructor() {
    effect(() => {
      document.documentElement.className = this.theme() === Theme.LIGHT ? 'light' : 'dark';
    });
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'x') {
      this.themeService.toggleTheme();
    }
  }

}
