import { Observable } from 'rxjs';

import { Stock } from '@shared/market/types/stock';
import { StockMap } from '@shared/market/types/stock-map';

import { STOCKS } from '@shared/market/types/data/stocks';

export class StockConstLoaderService {

  stocks: StockMap = STOCKS;

  constructor() {
  }

  loadAllStocks(): Observable<StockMap> {
    // console.log(`StockConstLoaderService::loadNotes() - stocks: ${JSON.stringify(this.stocks)}`);
    const stocks$: Observable<StockMap> = new Observable<StockMap>(observer => {
      setTimeout(() => {
        observer.next(this.stocks);
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
