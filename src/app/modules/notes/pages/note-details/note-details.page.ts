import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { LoadingStatusService } from '@app/services/loading-status.service';
import { StockNote } from '@shared/types/stock-note';
import { StockNoteConstLoaderService } from '@shared/services/stock-note-const-loader.service';

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
    private snls: StockNoteConstLoaderService
  ) { }

  ngOnInit() {
    this.isLoading$ = this.lss.createStatus('noteDetails');
    this.isLoading$.subscribe(status => {
      setTimeout(() => {
        this.isLoading = status;
        // console.log(`new loading status: ${status}`);
      }, 0);
    });
    this.lss.startLoading('noteDetails');

    this.route.params.pipe(
      concatMap(params => {
        console.log(`params: ${JSON.stringify(params)}`);
        const symbol: string = params['symbol'];
        return this.snls.loadNote(symbol);
      })
    ).subscribe(note => {
      console.log(`note: ${JSON.stringify(note)}`);
      this.lss.stopLoading('noteDetails');
      this.note = note;
    });
  }

}
