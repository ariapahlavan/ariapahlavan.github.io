import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { FunctionalProgrammingComponent } from './pages/functional-programming/functional-programming.component';
import { ReactiveProgrammingComponent } from './pages/reactive-programming/reactive-programming.component';
import { PwaWorkboxComponent } from './pages/pwa-workbox/pwa-workbox.component';
import { NginxRecaptchaComponent } from './pages/nginx-recaptcha/nginx-recaptcha.component';


@NgModule({
  declarations: [
    DetailsComponent,
    FunctionalProgrammingComponent,
    ReactiveProgrammingComponent,
    PwaWorkboxComponent,
    NginxRecaptchaComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    HttpClientModule,
    SharedModule,
    MarkdownModule.forChild()
  ]
})
export class DetailsModule { }
