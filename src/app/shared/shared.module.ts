import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { ThemeService } from './services/theme.service';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { CardComponent } from './components/card/card.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SurveyComponent } from './components/survey/survey.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { PostsService } from './services/posts.service';

const COMPONENTS = [
  CardComponent, CardGridComponent, SurveyComponent
];

const MAT_MODULES = [
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        ...MAT_MODULES,
        ReactiveFormsModule
    ],
  providers: [
    LocalStorageService,
    ThemeService,
    PostsService
  ],
  exports: [...COMPONENTS, ...MAT_MODULES]
})
export class SharedModule {
}
