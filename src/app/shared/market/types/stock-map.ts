import { Stock } from './stock';

export interface StockMap {
  [symbol: string]: Stock;
}
