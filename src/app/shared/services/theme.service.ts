import { Inject, Injectable, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private LIGHT_THEME_CLASS = 'light-theme';
  private DARK_THEME_CLASS = 'dark-theme';
  private THEME_KEY = 'is-theme-light';
  private renderer: Renderer2;
  set setRenderer(renderer: Renderer2) {
    this.renderer = renderer;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private localStorage: LocalStorageService
  ) { }

  init(isLight) {
    const isSelectedLight = this.localStorage.valueOf(this.THEME_KEY, isLight);
    this.updateTheme(isSelectedLight);
    return isSelectedLight;
  }

  updateTheme(isLight) {
    this.updateThemeTo(this.themeClass(isLight));
    this.localStorage.upsert(this.THEME_KEY, isLight);
  }

  private updateThemeTo(themeClass) {
    this.renderer.removeClass(this.document.body, this.otherTheme(themeClass));
    this.renderer.addClass(this.document.body, themeClass);
  }

  private themeClass(isLight) {
    return isLight ? this.LIGHT_THEME_CLASS : this.DARK_THEME_CLASS;
  }

  private otherTheme(curTheme) {
    return curTheme === this.DARK_THEME_CLASS ? this.LIGHT_THEME_CLASS : this.DARK_THEME_CLASS;
  }
}
