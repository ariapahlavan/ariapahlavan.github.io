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

const COMPONENTS = [
];

const MAT_MODULES = [
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule
];

@NgModule({
  declarations: [...COMPONENTS, CardComponent, CardGridComponent],
  imports: [
    CommonModule,
    ...MAT_MODULES
  ],
  providers: [
    LocalStorageService,
    ThemeService
  ],
  exports: [...COMPONENTS, ...MAT_MODULES, CardGridComponent]
})
export class SharedModule { }
