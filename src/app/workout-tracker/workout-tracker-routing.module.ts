import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutTrackerComponent } from './workout-tracker.component';

const routes: Routes = [{ path: '', component: WorkoutTrackerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutTrackerRoutingModule { }
