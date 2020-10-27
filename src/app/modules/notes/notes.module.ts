import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { NotesRoutingModule } from './notes-routing.module';

import { CurrentStockComponent } from './components/current-stock/current-stock.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { HomeSummaryComponent } from './components/notes-summary/notes-summary.component';
import { ProspectiveStockComponent } from './components/prospective-stock/prospective-stock.component';

import { NotesPage } from './pages/notes/notes.page';
import { NoteDetailsPage } from './pages/note-details/note-details.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    NotesRoutingModule
  ],
  declarations: [
    NotesPage,
    NoteDetailsComponent,
    NoteDetailsPage,
    CurrentStockComponent,
    HomeSummaryComponent,
    ProspectiveStockComponent
  ]
})
export class NotesPageModule {}
