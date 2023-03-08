import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'prefix'
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule),
    pathMatch: 'prefix'
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule),
    pathMatch: 'prefix'
  },
  {
    path: 'test',
    loadChildren: () => import('./testing/testing.module').then(m => m.TestingModule),
    pathMatch: 'prefix'
  },
  {
    path: 'tracker',
    loadChildren: () => import('./workout-tracker/workout-tracker.module').then(m => m.WorkoutTrackerModule),
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
