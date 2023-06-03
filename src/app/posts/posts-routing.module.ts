import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import {environment} from '../../environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'jobs',
    pathMatch: 'prefix'
  },
  {
    path: 'certs',
    component: PostsComponent,
    data: {path: environment.certsPath, key: environment.certsKey},
    pathMatch: 'prefix'
  },
  {
    path: 'jobs',
    component: PostsComponent,
    data: {path: environment.experiencePath, key: environment.experienceKey},
    pathMatch: 'prefix'
  },
  {
    path: 'projects',
    component: PostsComponent,
    data: {path: environment.projectsPath, key: environment.projectsKey},
    pathMatch: 'prefix'
  },
  {
    path: 'articles',
    component: PostsComponent,
    data: {path: environment.articlesPath, key: environment.articlesKey},
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
