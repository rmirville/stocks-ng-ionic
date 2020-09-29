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
  {
    symbol: 'SAM1',
    name: 'Sample Three',
    owned: true,
    suggestions: {
      watch: true,
      sell: false,
      buy: false,
    },
    prices: {
      current: 49.20,
      sold: {
        first: 72.39,
        last: 13.09,
      },
      sell: 55.00,
      bought: {
        first: 80.13,
        last: 10.12,
      },
      buy: 45.00,
    }
  },
  {
    symbol: 'SAM4',
    name: 'Sample Four',
    owned: true,
    suggestions: {
      watch: true,
      sell: false,
      buy: false,
    },
    prices: {
      current: 14.32,
      sold: {
        first: 16.32,
        last: 13.23,
      },
      sell: 20.00,
      bought: {
        first: 31.62,
        last: 15.26,
      },
      buy: 10.00,
    }
  },
];
