import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import {environment} from '../../environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'jobs'
  },
  {
    path: 'jobs',
    component: PostsComponent,
    data: {path: environment.experiencePath}
  },
  {
    path: 'projects',
    component: PostsComponent,
    data: {path: environment.projectsPath}
  },
  {
    path: 'articles',
    component: PostsComponent,
    data: {path: environment.articlesPath}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
