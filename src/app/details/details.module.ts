import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    DetailsComponent
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
