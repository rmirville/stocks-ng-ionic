import { Component, OnInit } from '@angular/core';

import { LoadingStatusService } from '@app/services/loading-status.service';
import { Stock } from '@shared/types/stock';
import { StockNoteConstLoaderService } from '@shared/services/stock-note-const-loader.service';

@Component({
  selector: 'stocks-notes-summary',
  templateUrl: './notes-summary.component.html',
  styleUrls: ['./notes-summary.component.scss'],
})
export class HomeSummaryComponent implements OnInit {

  isLoaded: boolean = false;
  currentStocks: Stock[];
  prospectiveStocks: Stock[];

  constructor(private lss: LoadingStatusService, private snls: StockNoteConstLoaderService) { }

  ngOnInit() {
    this.currentStocks = [];
    this.prospectiveStocks = [];
    this.snls.loadNotes().subscribe(stocks => {
      this.lss.stopLoading('notes');
      this.isLoaded = true;
      for (const stock of stocks) {
        if (stock.owned) {
          this.currentStocks.push(stock);
        }
        else {
          this.prospectiveStocks.push(stock);
        }
      }
    });
  }

}
