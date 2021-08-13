import { Dictionary } from '@shared/types';

import { Stock } from '../stock';

export const STOCKS: Dictionary<Stock> = {
  'SAM1': {
    symbol: 'SAM1',
    name: 'Sample One',
    price: 15.39,
  },
  'SAM2': {
    symbol: 'SAM2',
    name: 'Sample Two',
    price: 30.41,
  },
  'SAM3': {
    symbol: 'SAM3',
    name: 'Sample Three',
    price: 49.20,
  },
  'SAM4': {
    symbol: 'SAM4',
    name: 'Sample Four',
    price: 14.32,
  },
};