import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLight = true;

  constructor(
    private renderer: Renderer2,
    private themeService: ThemeService
  ) {
    this.themeService.setRenderer = renderer;
  }

  ngOnInit(): void {
    this.isLight = this.themeService.init(this.isLight);
  }

  switchTheme() {
    this.isLight = !this.isLight;
    this.themeService.updateTheme(this.isLight);
  }
}
