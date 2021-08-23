import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';

import { NotesSummaryActions } from '@modules/notes/store/notes-summary.actions';
import { NoteDetailsActions } from '@modules/notes/store/note-details.actions';
import { StockNoteLoaderActions } from '@shared/notes/store/stock-note-loader.actions';

import { StockNoteConstLoaderService } from '@shared/notes/services/stock-note-const-loader.service';

@Injectable()
export class StockNoteEffects {
  getNotesSummary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesSummaryActions.getNotes),
      exhaustMap(() =>
        this.snls.loadNotes().pipe(
          // tap(stockNotes => console.log(`StockNoteEffects::getNotesSummary$::loadNotes() - stockNotes: ${JSON.stringify(stockNotes)}`)),
          map(stockNotes => StockNoteLoaderActions.getAllSummariesSuccess({ stockNotes })),
          catchError(error => of(StockNoteLoaderActions.getAllSummariesFailure({ error })))
        )
      )
    )
  );

  getNoteDetails$ = createEffect(() => 
    this.actions$.pipe(
      ofType(NoteDetailsActions.getNote),
      switchMap((props) =>
        this.snls.loadNote(props.symbol).pipe(
          map(stockNote => StockNoteLoaderActions.getNoteDetailsSuccess({ stockNote })),
          catchError(error => of(StockNoteLoaderActions.getNoteDetailsFailure({ error })))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private snls: StockNoteConstLoaderService
  ) {}
}
