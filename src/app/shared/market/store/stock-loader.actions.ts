import { createAction, props } from '@ngrx/store';

import { messages } from '@app/store/action-types';
import { Stock } from '@shared/market/types';
import { Dictionary } from '@shared/types';

export namespace StockLoaderActions {
  export const getAllStocksSuccess = createAction(messages.stockLoaderService.GET_ALL_SUCCESS, props<{stocks: Dictionary<Stock>}>());
  export const getAllStocksFailure = createAction(messages.stockLoaderService.GET_ALL_FAILURE, props<{error: Error}>());
  export const getStocksSuccess = createAction(messages.stockLoaderService.GET_MULTI_SUCCESS, props<{stocks: Dictionary<Stock>}>());
  export const getStocksFailure = createAction(messages.stockLoaderService.GET_MULTI_FAILURE, props<{error: Error}>());
  export const getStockSuccess = createAction(messages.stockLoaderService.GET_ONE_SUCCESS, props<{stock: Stock}>());
  export const getStockFailure = createAction(messages.stockLoaderService.GET_ONE_FAILURE, props<{error: Error}>());
}
