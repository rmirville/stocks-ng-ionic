import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Stock } from '@shared/types/stock';

import { STOCKS } from '../data/stocks';

@Injectable({
  providedIn: 'root'
})
export class StockConstLoaderService {

  stocks: Stock[] = STOCKS;

  constructor() {
  }

  loadStocks(): Observable<Stock[]> {
    console.log(`StockConstLoaderService::loadStocks() - stocks: ${JSON.stringify(this.stocks)}`);
    return of(this.stocks);
  }
}
