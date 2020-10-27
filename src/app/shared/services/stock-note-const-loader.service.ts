import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SharedModule } from '@shared/shared.module';

import { StockNote } from '@shared/types/stock-note';

import { NOTES } from '@shared/types/data/stock-notes';

@Injectable({
  providedIn: SharedModule
})
export class StockNoteConstLoaderService {

  notes: StockNote[] = NOTES;

  constructor() {
  }

  loadNotes(): Observable<StockNote[]> {
    console.log(`StockConstLoaderService::loadNotes() - stocks: ${JSON.stringify(this.notes)}`);
    const notes$: Observable<StockNote[]> = new Observable<StockNote[]>(observer => {
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
        console.log(`symbol: ${JSON.stringify(symbol)}`);
        symbol = symbol.toUpperCase();
        const note: StockNote = this.notes.find(n => n.symbol == symbol);
        console.log(`note: ${JSON.stringify(note)}`);
        observer.next(note);
        observer.complete();
      }, 1500);
    });
    return note$;
  }
}
