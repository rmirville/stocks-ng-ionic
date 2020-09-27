import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LoadingStatusService } from '@app/services/loading-status.service';
import { Stock } from '@shared/types/stock';
import { StockConstLoaderService } from '@data/const/services/stock-const-loader.service';

@Component({
  selector: 'stocks-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  currentStocks: Stock[];
  prospectiveStocks: Stock[];
  isLoading: boolean;
  isLoading$: Observable<boolean>;

  constructor(private lss: LoadingStatusService, private scls: StockConstLoaderService) { }

  ngOnInit() {
    console.group('HomePage::ngOnInit()');
    this.currentStocks = [];
    this.prospectiveStocks = [];
    this.scls.loadStocks().subscribe(stocks => {
      for (const stock of stocks) {
        console.log(`stock: ${JSON.stringify(stock)}`);
        console.log
        if (stock.owned) {
          this.currentStocks.push(stock);
        }
        else {
          this.prospectiveStocks.push(stock);
        }
      }
    });
    this.isLoading$ = this.lss.createStatus('home');
    
    this.isLoading$.subscribe(status => {
      setTimeout(() => {
        this.isLoading = status;
        // console.log(`new loading status: ${status}`);
      }, 0);
    });
    this.lss.startLoading('home');
    console.groupEnd();
  }

}
