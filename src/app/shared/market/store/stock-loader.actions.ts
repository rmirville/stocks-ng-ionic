import { createAction, props } from '@ngrx/store';

import { ACTION_TYPES } from '@app/store';
import { Stock } from '@shared/market/types';
import { Dictionary } from '@shared/types';

export namespace StockLoaderActions {
  export const getAllStocksSuccess = createAction(ACTION_TYPES.stockLoaderService.GET_ALL_SUCCESS, props<{stocks: Dictionary<Stock>}>());
  export const getAllStocksFailure = createAction(ACTION_TYPES.stockLoaderService.GET_ALL_FAILURE, props<{error: Error}>());
  export const getStocksSuccess = createAction(ACTION_TYPES.stockLoaderService.GET_MULTI_SUCCESS, props<{stocks: Dictionary<Stock>}>());
  export const getStocksFailure = createAction(ACTION_TYPES.stockLoaderService.GET_MULTI_FAILURE, props<{error: Error}>());
  export const getStockSuccess = createAction(ACTION_TYPES.stockLoaderService.GET_ONE_SUCCESS, props<{stock: Stock}>());
  export const getStockFailure = createAction(ACTION_TYPES.stockLoaderService.GET_ONE_FAILURE, props<{error: Error}>());
}
