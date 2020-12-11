import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';

import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { StockConstLoaderService } from './market/services/stock-const-loader.service';
import { StockEffects } from './market/store/stock.effects';
import { StockNoteConstLoaderService } from './notes/services/stock-note-const-loader.service';
import { StockNoteEffects } from './notes/store/stock-note.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EffectsModule.forFeature([StockEffects, StockNoteEffects]),
  ],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent],
  providers: [
    StockConstLoaderService,
    StockNoteConstLoaderService
  ]
})
export class SharedModule { }
