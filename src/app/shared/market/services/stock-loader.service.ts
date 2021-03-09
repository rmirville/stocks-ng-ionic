import { Observable } from 'rxjs';

import { Stock } from '@shared/market/types/stock';
import { StockMap } from '@shared/market/types/stock-map';

export interface StockLoaderService {
  loadStocks(symbols: string[]): Observable<StockMap>;
  loadStock(symbol: string): Observable<Stock>;
}
