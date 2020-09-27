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
    bought: {
      first: number;
      last: number;
    };
    buy: number;
    sold: {
      first: number;
      last: number;
    };
    sell: number;
  };
}
