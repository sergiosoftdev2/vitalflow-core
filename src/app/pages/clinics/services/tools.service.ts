import { Injectable, signal, computed, HostListener } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private screenWidth = signal(window.innerWidth);
  isMobile = computed(() => this.screenWidth() < 1024);

  constructor() {
    window.addEventListener('resize', () => {
      this.screenWidth.set(window.innerWidth);
    });
  }
  
  getDeviceOS(): string {
    const ua = navigator.userAgent;
    const platform = navigator.platform;

    if (/android/i.test(ua)) {
      return 'android';
    }

    if (/iPad|iPhone|iPod/.test(ua) || (platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
      return 'ios';
    }

    if (/Win/i.test(ua) || /Win/i.test(platform)) {
      return 'windows';
    }

    if (/Mac/i.test(ua) || /Mac/i.test(platform)) {
      return 'mac';
    }

    if (/Linux/i.test(ua) || /Linux/i.test(platform)) {
      return 'linux';
    }

    return 'web-other';
  }

  

}