import { Stock } from '@shared/types/stock';

export const STOCKS: Stock[] = [
  {
    symbol: 'SAM1',
    name: 'Sample One',
    owned: true,
    suggestions: {
      watch: true,
      sell: false,
      buy: false,
    },
    prices: {
      current: 15.39,
      sold: {
        first: 13.29,
        last: 13.29,
      },
      sell: 20.00,
      bought: {
        first: 18.13,
        last: 14.79,
      },
      buy: 14.00,
    }
  },
  {
    symbol: 'SAM2',
    name: 'Sample Two',
    owned: false,
    suggestions: {
      watch: true,
      sell: false,
      buy: false,
    },
    prices: {
      current: 30.41,
      sold: {
        first: null,
        last: null,
      },
      sell: null,
      bought: {
        first: null,
        last: null,
      },
      buy: 25.00,
    }
  },
];
