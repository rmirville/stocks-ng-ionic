import { Stock } from '@shared/market/types';
import { Dictionary } from '@shared/types';

export interface MarketFetchState {
  readonly fetchAttempted: boolean;
  readonly hasError: boolean;
  readonly error?: Error;
}

export interface MarketState {
  stocks: Dictionary<Stock>;
  getAllStatus: MarketFetchState;
  getMultiStatus: MarketFetchState;
  getOneStatus: MarketFetchState;
}
