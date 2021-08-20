import { createSelector, Selector, SelectorWithProps } from '@ngrx/store';

import { AppState } from '@app/store';
import { Stock } from '@shared/market/types';
import { StockNote, Transaction } from '@shared/notes/types';
import { Dictionary } from '@shared/types';

import { NotesState, NotesFetchState } from './notes.state';

export interface StockNoteSummary {
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

export interface AllStockNoteSummariesState {
  summaries: StockNoteSummary[];
  loaded: boolean;
}

export interface StockNoteDetails extends StockNoteSummary {
  history: Transaction[];
}

interface NoteState {
  stockNote: StockNote;
  getOneStatus: NotesFetchState;
}

export interface OneStockNoteDetailsState {
  details: StockNoteDetails;
  loaded: boolean;
}

const selectStockNote: SelectorWithProps<AppState, {symbol: string}, NoteState> = (state: AppState, props) => ({
  stockNote: state.notes.stockNotes[props.symbol.toUpperCase()],
  getOneStatus: state.notes.getOneStatus
});

const selectAllStockNotes: Selector<AppState, NotesState> = (state: AppState) => state.notes;

const selectStock: SelectorWithProps<AppState, {symbol: string}, Stock> = (state: AppState, props) => state.market.stocks[props.symbol.toUpperCase()];

const selectAllStocks: Selector<AppState, Dictionary<Stock>> = (state: AppState) => state.market.stocks;

const selectStocks: SelectorWithProps<AppState, {stocks: string[]}, Dictionary<Stock>> = (state: AppState, props) => {
  let selectedStocks: Dictionary<Stock> = {};
  for (const symbol of props.stocks) {
    if (state.market.stocks.hasOwnProperty(symbol)) {
      selectedStocks[symbol] = state.market.stocks[symbol];
    }
  }
  return selectedStocks;
};

export const selectAllStockNoteSummaries: Selector<AppState, AllStockNoteSummariesState> = (state: AppState) => {
  // console.group('NotesSelectors::selectAllStockNoteSummaries()');
  const notes: NotesState = selectAllStockNotes(state);
  const stockNotes: Dictionary<StockNote> = notes.stockNotes;
  const stocks: Dictionary<Stock> = selectStocks(state, {stocks: Object.keys(stockNotes)});

  let noteSummaries: AllStockNoteSummariesState = {summaries: [], loaded: false};
  
  if (!notes.getAllStatus.fetchAttempted) {
    return noteSummaries;
  }
  if ((Object.entries(stockNotes).length > 0) && (Object.entries(stocks).length > 0)) {
    for (const symbol in stockNotes) {
      if (stocks.hasOwnProperty(symbol)) {
        const noteSummary: StockNoteSummary = {
          symbol: stocks[symbol].symbol,
          name: stocks[symbol].name,
          owned: stockNotes[symbol].owned,
          suggestions: {...stockNotes[symbol].suggestions},
          prices: {
            ...stockNotes[symbol].prices,
            current: stocks[symbol].price
          }
        };
        noteSummaries.summaries.push(noteSummary);
      }
    }
    noteSummaries.loaded = true;
  }
  // console.groupEnd();
  return noteSummaries;
}

export const selectStockNoteDetails = createSelector(selectStockNote, selectStock, (note: NoteState, stock: Stock) => {
  // console.group('NotesSelectors::selectStockNoteDetails()');
  let stockNoteDetails: OneStockNoteDetailsState = {details: null, loaded: false};
  if (!note.getOneStatus.fetchAttempted) {
    // console.groupEnd();
    return stockNoteDetails;
  }
  // console.log(`note: ${JSON.stringify(note)}`);
  // console.log(`stock: ${JSON.stringify(stock)}`);
  if (stock !== undefined && stock !== null) {
    // console.log('stock not undefined');
    stockNoteDetails = {
      details: {
        symbol: stock.symbol,
        name: stock.name,
        owned: note.stockNote.owned,
        suggestions: {...note.stockNote.suggestions},
        prices: {
          ...note.stockNote.prices,
          current: stock.price
        },
        history: [...note.stockNote.history]
      },
      loaded: note.getOneStatus.fetchAttempted
    };
  }
  // console.log(`stockNoteDetails: ${JSON.stringify(stockNoteDetails)}`);
  // console.groupEnd();
  return stockNoteDetails;
});
