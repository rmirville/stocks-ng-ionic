import { Action, createReducer, on } from '@ngrx/store';

import { StockMap } from '@shared/market/types/stock-map';
import { StockLoaderActions } from '@shared/market/store/stock-loader.actions';

export interface MarketState {
  stocks: StockMap;
  getAllStatus: {
    hasError: boolean;
    error?: Error;
  };
}

const initialState: MarketState = {
  stocks: {},
  getAllStatus: {
    hasError: false
  }
};

export const reducer = createReducer<MarketState, Action>(
  initialState,
  on(StockLoaderActions.getAllStocksSuccess, (state, { stocks }) => {
    const getAllStatus = {
      hasError: false
    };
    const newState: MarketState = { ...state, stocks, getAllStatus};
    return newState;
  }),
  on(StockLoaderActions.getAllStocksFailure, (state, { error }) => {
    const getAllStatus = {
      hasError: true,
      error
    };
    return { ...state, getAllStatus };
  })
);

export const featureKey = 'market';
