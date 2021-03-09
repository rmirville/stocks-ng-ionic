import { Action, createReducer, on } from '@ngrx/store';

import { StockMap } from '@shared/market/types/stock-map';
import { StockLoaderActions } from '@shared/market/store/stock-loader.actions';

export interface MarketFetchState {
  readonly fetchAttempted: boolean;
  readonly hasError: boolean;
  readonly error?: Error;
};
export interface MarketState {
  stocks: StockMap;
  getAllStatus: MarketFetchState;
  getMultiStatus: MarketFetchState;
  getOneStatus: MarketFetchState;
}

const initialState: MarketState = {
  stocks: {},
  getAllStatus: {
    fetchAttempted: false,
    hasError: false
  },
  getMultiStatus: {
    fetchAttempted: false,
    hasError: false
  },
  getOneStatus: {
    fetchAttempted: false,
    hasError: false
  }
};

export const reducer = createReducer<MarketState, Action>(
  initialState,
  on(StockLoaderActions.getAllStocksSuccess, (state, { stocks }) => {
    const getAllStatus = {
      fetchAttempted: true,
      hasError: false
    };
    const newState: MarketState = { ...state, stocks, getAllStatus };
    return newState;
  }),
  on(StockLoaderActions.getAllStocksFailure, (state, { error }) => {
    const getAllStatus = {
      fetchAttempted: true,
      hasError: true,
      error
    };
    return { ...state, getAllStatus };
  }),
  on(StockLoaderActions.getStocksSuccess, (state, { stocks }) => {
    const getMultiStatus = {
      fetchAttempted: true,
      hasError: false
    };
    const newState: MarketState = { ...state, stocks, getMultiStatus };
    return newState;
  }),
  on(StockLoaderActions.getStocksFailure, (state, { error }) => {
    const getMultiStatus = {
      fetchAttempted: true,
      hasError: true,
      error
    };
    return { ...state, getMultiStatus };
  }),
  on(StockLoaderActions.getStockSuccess, (state, { stock }) => {
    // console.group('MarketReducer::on(getStockSuccess)');
    const getOneStatus = {
      fetchAttempted: true,
      hasError: false
    };
    const symbol: string = stock.symbol;
    const newState: MarketState = { ...state, stocks: { ...state.stocks, [symbol]: stock }, getOneStatus };
    // console.log(`state: ${JSON.stringify(state)}`);
    // console.log(`newState: ${JSON.stringify(newState)}`);
    // console.groupEnd();
    return newState;
  }),
  on(StockLoaderActions.getStockFailure, (state, { error }) => {
    const getOneStatus = {
      fetchAttempted: true,
      hasError: true,
      error
    };
    return { ...state, getOneStatus };
  }),
);

export const featureKey = 'market';
