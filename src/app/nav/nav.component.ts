import { Component, OnInit, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuContent = [
    {text: 'Home', link: '/home'},
    {text: 'Articles', link: '/posts/articles'},
    {text: 'Projects', link: '/posts/projects'},
    {text: 'Experience', link: '/posts/jobs'},
  ];
  isLight = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Medium])
    .pipe(
      map(result => !result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
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
