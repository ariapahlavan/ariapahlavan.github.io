import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutTrackerRoutingModule } from './workout-tracker-routing.module';
import { WorkoutTrackerComponent } from './workout-tracker.component';
import { SharedModule } from '../shared/shared.module';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    WorkoutTrackerComponent
  ],
  imports: [
    CommonModule,
    WorkoutTrackerRoutingModule,
    SharedModule,
    MarkdownModule.forChild()
  ],
  providers: [
    LocalStorageService
  ]
})
export class WorkoutTrackerModule { }
