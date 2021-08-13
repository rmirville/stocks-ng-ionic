import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { LoadingStatusService } from '@app/services/loading-status.service';
import { StockNoteConstLoaderService } from '@shared/notes/services/stock-note-const-loader.service';
import { StockNote } from '@shared/notes/types';

import { NoteDetailsActions } from '../../store/note-details.actions';
import { OneStockNoteDetailsState, selectStockNoteDetails } from '../../store/notes.selectors';

@Component({
  selector: 'stocks-note-page',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})
export class NoteDetailsPage implements OnInit {

  note: StockNote;
  note$: Observable<OneStockNoteDetailsState>
  isLoading: boolean;
  isLoading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private lss: LoadingStatusService,
    private store: Store,
    private snls: StockNoteConstLoaderService
  ) { }

  ngOnInit() {
    const params$: Observable<Params> = this.route.params;
    
    this.note = {
      symbol: null,
      owned: null,
      suggestions: {
        watch: null,
        buy: null,
        sell: null,
      },
      prices: {
        buy: null,
        sell: null,
      },
      history: null
    };
    this.isLoading$ = this.lss.createStatus('noteDetails');
    this.isLoading$.subscribe(status => {
      setTimeout(() => {
        this.isLoading = status;
        // console.log(`new loading status: ${status}`);
      }, 0);
    });
    this.lss.startLoading('noteDetails');

    params$.pipe(
      concatMap(params => {
        // console.log(`params: ${JSON.stringify(params)}`);
        const props: {symbol: string} = {symbol: params['symbol']};
        return this.store.select(selectStockNoteDetails, props);
      })
    ).subscribe(state => {
      // console.log(`note: ${JSON.stringify(state)}`);
      if(!state.loaded) {
        return;
      }
      this.lss.stopLoading('noteDetails');
      this.note = state.details;
    });

    params$.subscribe(params => {
      const props: {symbol: string} = {symbol: params['symbol']};
      this.store.dispatch(NoteDetailsActions.getNote(props));
    });
  }

}
