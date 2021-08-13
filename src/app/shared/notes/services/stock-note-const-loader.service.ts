import { Observable } from 'rxjs';

import { StockNote } from '@shared/notes/types';
import { NOTES } from '@shared/notes/types/data/stock-notes';
import { Dictionary } from '@shared/types';

export class StockNoteConstLoaderService {

  notes: Dictionary<StockNote> = NOTES;

  constructor() {
  }

  loadNotes(): Observable<Dictionary<StockNote>> {
    // console.log(`StockConstLoaderService::loadNotes() - stocks: ${JSON.stringify(this.notes)}`);
    const notes$: Observable<Dictionary<StockNote>> = new Observable<Dictionary<StockNote>>(observer => {
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
