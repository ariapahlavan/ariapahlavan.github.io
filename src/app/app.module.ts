import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { UrlSerializer } from '@angular/router';
import { urlSerializerFactory } from './shared/helpers/trailing-slash.helper';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      loader: HttpClient
    }),
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: UrlSerializer, useFactory: urlSerializerFactory }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
