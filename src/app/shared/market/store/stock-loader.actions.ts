import { createAction, props } from '@ngrx/store';

import { messages } from '@app/store/action-types';
import { Stock } from '@shared/market/types/stock';
import { StockMap } from '@shared/market/types/stock-map';

export namespace StockLoaderActions {
  export const getAllStocksSuccess = createAction(messages.stockLoaderService.GET_ALL_SUCCESS, props<{stocks: StockMap}>());
  export const getAllStocksFailure = createAction(messages.stockLoaderService.GET_ALL_FAILURE, props<{error: Error}>());
  export const getStocksSuccess = createAction(messages.stockLoaderService.GET_MULTI_SUCCESS, props<{stocks: StockMap}>());
  export const getStocksFailure = createAction(messages.stockLoaderService.GET_MULTI_FAILURE, props<{error: Error}>());
  export const getStockSuccess = createAction(messages.stockLoaderService.GET_ONE_SUCCESS, props<{stock: Stock}>());
  export const getStockFailure = createAction(messages.stockLoaderService.GET_ONE_FAILURE, props<{error: Error}>());
}
