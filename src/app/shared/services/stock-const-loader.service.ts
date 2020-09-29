import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Stock } from '@shared/types/stock';

import { STOCKS } from '@shared/types/data/stocks';

@Injectable({
  providedIn: 'root'
})
export class StockConstLoaderService {

  stocks: Stock[] = STOCKS;

  constructor() {
  }

  loadStocks(): Observable<Stock[]> {
    console.log(`StockConstLoaderService::loadStocks() - stocks: ${JSON.stringify(this.stocks)}`);
    const stocks$: Observable<Stock[]> = new Observable<Stock[]>(observer => {
      setTimeout(() => {
        observer.next(this.stocks);
        observer.complete();
      }, 1500);
    });
    return stocks$;
  }
}
