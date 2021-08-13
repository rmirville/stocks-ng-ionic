import { Observable } from 'rxjs';

import { STOCKS } from '@shared/market/types/data/stocks';
import { Stock } from '@shared/market/types';
import { Dictionary } from '@shared/types';

import { StockLoaderService } from './stock-loader.service';

export class StockConstLoaderService implements StockLoaderService {

  stocks: Dictionary<Stock> = STOCKS;

  constructor() {
  }

  loadAllStocks(): Observable<Dictionary<Stock>> {
    // console.log(`StockConstLoaderService::loadNotes() - stocks: ${JSON.stringify(this.stocks)}`);
    const stocks$: Observable<Dictionary<Stock>> = new Observable<Dictionary<Stock>>(observer => {
      setTimeout(() => {
        observer.next(this.stocks);
        observer.complete();
      }, 1500);
    });
    return stocks$;
  }

  loadStocks(symbols: string[]): Observable<Dictionary<Stock>> {
    const stocks$: Observable<Dictionary<Stock>> = new Observable<Dictionary<Stock>>(observer => {
      setTimeout(() => {
        let stocks: Dictionary<Stock> = {};
        for (const symbol of symbols) {
          if (this.stocks.hasOwnProperty(symbol)) {
            stocks[symbol] = this.stocks[symbol];
          }
        }
        observer.next(stocks);
        observer.complete();
      }, 1500);
    });
    return stocks$;
  }

  loadStock(symbol: string): Observable<Stock> {
    const stock$: Observable<Stock> = new Observable<Stock>(observer => {
      setTimeout(() => {
        // console.log(`symbol: ${JSON.stringify(symbol)}`);
        symbol = symbol.toUpperCase();
        const stock: Stock = this.stocks[symbol];
        // console.log(`note: ${JSON.stringify(stock)}`);
        observer.next(stock);
        observer.complete();
      }, 1500);
    });
    return stock$;
  }
}
