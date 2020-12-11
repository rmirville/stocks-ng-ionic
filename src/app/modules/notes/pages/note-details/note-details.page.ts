import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

import { LoadingStatusService } from '@app/services/loading-status.service';
import { StockNote } from '@shared/notes/types/stock-note';
import { StockNoteConstLoaderService } from '@shared/notes/services/stock-note-const-loader.service';

import { NoteDetailsActions } from '../../store/note-details.actions';
import { selectStockNoteDetails } from '../../store/notes.selectors';

@Component({
  selector: 'stocks-note-page',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})
export class NoteDetailsPage implements OnInit {

  note: StockNote;
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
    ).subscribe(note => {
      // console.log(`note: ${JSON.stringify(note)}`);
      this.lss.stopLoading('noteDetails');
      this.note = note;
    });

    params$.subscribe(params => {
      const props: {symbol: string} = {symbol: params['symbol']};
      this.store.dispatch(NoteDetailsActions.getNote(props));
    });
  }

}
