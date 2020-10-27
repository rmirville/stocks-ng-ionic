import { StockNote } from '@shared/types/stock-note';

export const NOTES: StockNote[] = [
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
      sell: 20.00,
      buy: 14.00,
    },
    history: []
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
      sell: null,
      buy: 25.00,
    },
    history: []
  },
  {
    symbol: 'SAM3',
    name: 'Sample Three',
    owned: true,
    suggestions: {
      watch: true,
      sell: false,
      buy: false,
    },
    prices: {
      current: 49.20,
      sell: 55.00,
      buy: 45.00,
    },
    history: []
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
      sell: 20.00,
      buy: 10.00,
    },
    history: []
  },
];
