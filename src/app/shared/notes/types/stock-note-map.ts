import { StockNote } from './stock-note';

export interface StockNoteMap {
  [symbol: string]: StockNote;
}
