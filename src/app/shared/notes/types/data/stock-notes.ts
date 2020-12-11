import { StockNoteMap } from '@shared/notes/types/stock-note-map';

export const NOTES: StockNoteMap = {
  'SAM1': {
    symbol: 'SAM1',
    owned: true,
    suggestions: {
      watch: true,
      sell: false,
      buy: false,
    },
    prices: {
      sell: 20.00,
      buy: 14.00,
    },
    history: []
  },
  'SAM2': {
    symbol: 'SAM2',
    owned: false,
    suggestions: {
      watch: true,
      sell: false,
      buy: false,
    },
    prices: {
      sell: null,
      buy: 25.00,
    },
    history: []
  },
  'SAM3': {
    symbol: 'SAM3',
    owned: true,
    suggestions: {
      watch: true,
      sell: false,
      buy: false,
    },
    prices: {
      sell: 55.00,
      buy: 45.00,
    },
    history: []
  },
  'SAM4': {
    symbol: 'SAM4',
    owned: true,
    suggestions: {
      watch: true,
      sell: false,
      buy: false,
    },
    prices: {
      sell: 20.00,
      buy: 10.00,
    },
    history: []
  },
};
