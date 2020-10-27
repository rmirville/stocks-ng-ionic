export interface Transaction {
  transaction: 'buy' | 'sell';
  num: number;
  price: number;
  date: string;
};
