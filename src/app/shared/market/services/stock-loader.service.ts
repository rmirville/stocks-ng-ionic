import { Observable } from 'rxjs';

import { Stock } from '@shared/market/types';
import { Dictionary } from '@shared/types';

export interface StockLoaderService {
  loadStocks(symbols: string[]): Observable<Dictionary<Stock>>;
  loadStock(symbol: string): Observable<Stock>;
}
