import { Component, OnInit } from '@angular/core';

import { LoadingStatusService } from '@app/services/loading-status.service';
import { Stock } from '@shared/types/stock';
import { StockConstLoaderService } from '@shared/services/stock-const-loader.service';

@Component({
  selector: 'stocks-home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.scss'],
})
export class HomeSummaryComponent implements OnInit {

  isLoaded: boolean = false;
  currentStocks: Stock[];
  prospectiveStocks: Stock[];

  constructor(private lss: LoadingStatusService, private scls: StockConstLoaderService) { }

  ngOnInit() {
    this.currentStocks = [];
    this.prospectiveStocks = [];
    this.scls.loadStocks().subscribe(stocks => {
      this.lss.stopLoading('home');
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
