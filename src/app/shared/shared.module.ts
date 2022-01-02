import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { ThemeService } from './services/theme.service';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SurveyComponent } from './components/survey/survey.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    ThemeService
  ],
  exports: [...COMPONENTS, ...MAT_MODULES]
})
export class SharedModule {
}
