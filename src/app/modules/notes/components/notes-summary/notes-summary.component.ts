import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadingStatusService } from '@app/services/loading-status.service';

import { StockNoteSummary, selectAllStockNoteSummaries } from '../../store/notes.selectors';
import { NotesSummaryActions } from '../../store/notes-summary.actions';

@Component({
  selector: 'stocks-notes-summary',
  templateUrl: './notes-summary.component.html',
  styleUrls: ['./notes-summary.component.scss'],
})
export class HomeSummaryComponent implements OnInit {

  isLoaded: boolean = false;
  currentStocks: StockNoteSummary[];
  prospectiveStocks: StockNoteSummary[];
  notes$: Observable<StockNoteSummary[]>;

  constructor(private lss: LoadingStatusService, private store: Store) { }

  ngOnInit() {
    this.currentStocks = [];
    this.prospectiveStocks = [];
    this.notes$ = this.store.select(selectAllStockNoteSummaries);
    this.notes$.subscribe(stocks => {
      // console.group('NotesSummaryComponent::notes$.subscribe()');
      this.lss.stopLoading('notes');
      this.isLoaded = true;
      // console.log(`notes: ${JSON.stringify(stocks)}`);
      if (stocks !== undefined && stocks.hasOwnProperty(length)) {
        for (const stock of stocks) {
          if (stock.owned) {
            this.currentStocks.push(stock);
          }
          else {
            this.prospectiveStocks.push(stock);
          }
        }
      }
      // console.groupEnd();
    });
    this.store.dispatch(NotesSummaryActions.getNotes());
  }

}
