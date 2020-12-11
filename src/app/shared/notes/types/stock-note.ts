import { Transaction } from './transaction';

export interface StockNote {
  symbol: string;
  owned: boolean;
  suggestions: {
    watch: boolean;
    buy: boolean;
    sell: boolean;
  };
  prices: {
    buy: number;
    sell: number;
  };
  history: Transaction[];
}
