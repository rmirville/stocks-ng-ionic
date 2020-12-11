import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SharedModule } from '@shared/shared.module';

import { StockNote } from '@shared/notes/types/stock-note';
import { StockNoteMap } from '@shared/notes/types/stock-note-map';

import { NOTES } from '@shared/notes/types/data/stock-notes';

export class StockNoteConstLoaderService {

  notes: StockNoteMap = NOTES;

  constructor() {
  }

  loadNotes(): Observable<StockNoteMap> {
    // console.log(`StockConstLoaderService::loadNotes() - stocks: ${JSON.stringify(this.notes)}`);
    const notes$: Observable<StockNoteMap> = new Observable<StockNoteMap>(observer => {
      setTimeout(() => {
        observer.next(this.notes);
        observer.complete();
      }, 1500);
    });
    return notes$;
  }

  loadNote(symbol: string): Observable<StockNote> {
    const note$: Observable<StockNote> = new Observable<StockNote>(observer => {
      setTimeout(() => {
        // console.log(`symbol: ${JSON.stringify(symbol)}`);
        symbol = symbol.toUpperCase();
        const note: StockNote = this.notes[symbol];
        // console.log(`note: ${JSON.stringify(note)}`);
        observer.next(note);
        observer.complete();
      }, 1500);
    });
    return note$;
  }
}
