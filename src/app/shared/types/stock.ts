export interface Stock {
  symbol: string;
  name: string;
  owned: boolean;
  suggestions: {
    watch: boolean;
    buy: boolean;
    sell: boolean;
  };
  prices: {
    current: number;
    buy: number;
    sell: number;
  };
}
