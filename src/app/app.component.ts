import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    ['github', 'linkedin', 'stack-overflow']
      .forEach(iconName => {
        this.matIconRegistry.addSvgIcon(
          iconName,
          this.domSanitizer.bypassSecurityTrustResourceUrl(`${env.assetsPath}/icons/${iconName}.svg`)
        );
      });
  }
}
