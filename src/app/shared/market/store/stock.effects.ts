import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { NotesSummaryActions } from '@modules/notes/store/notes-summary.actions';
import { NoteDetailsActions } from '@modules/notes/store/note-details.actions';
import { StockLoaderActions } from '@shared/market/store/stock-loader.actions';
import { StockNoteLoaderActions } from '@shared/notes/store/stock-note-loader.actions';

import { StockConstLoaderService } from '@shared/market/services/stock-const-loader.service';

@Injectable()
export class StockEffects {
  getAllStocks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesSummaryActions.getNotes),
      exhaustMap(() =>
        this.sls.loadAllStocks().pipe(
          // tap(stocks => console.log(`StockEffects::getAllStocks$::loadAllStocks() - stocks: ${JSON.stringify(stocks)}`)),
          map(stocks => StockLoaderActions.getAllStocksSuccess({ stocks })),
          catchError(error => of(StockLoaderActions.getAllStocksFailure({ error })))
        )
      )
    )
  );

  getStocks$ = createEffect(() => 
    this.actions$.pipe(
      ofType(StockNoteLoaderActions.getAllSummariesSuccess),
      exhaustMap((notes) => {
        const symbols: string[] = Object.keys(notes.stockNotes);
        return this.sls.loadStocks(symbols).pipe(
          map(stocks => StockLoaderActions.getStocksSuccess({ stocks })),
          catchError(error => of(StockLoaderActions.getStocksFailure({ error })))
        );
      })
    )
  );

  getStock$ = createEffect(() => 
    this.actions$.pipe(
      ofType(NoteDetailsActions.getNote),
      exhaustMap((props) =>
        this.sls.loadStock(props.symbol).pipe(
          map(stock => StockLoaderActions.getStockSuccess({ stock })),
          catchError(error => of(StockLoaderActions.getStockFailure({ error })))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private sls: StockConstLoaderService
  ) {}
}
