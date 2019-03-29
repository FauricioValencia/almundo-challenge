import { Action } from '@ngrx/store';
import { Hotel } from '../../models';

const NAMESPACE = 'HOTEL-LIST';
const withNamespace = action => `${NAMESPACE} - ${action}`;

// Action Types
export const Types = {
  SearchHotels: withNamespace('Apply Filters on Hotel List'),
  FetchHotels: withNamespace('Fetch Hotels'),
  FetchHotelsDone: withNamespace('Fetch Hotels Done'),
  FetchHotelsFailed: withNamespace('Fetch Hotels Failed')
};

// Actions Creators
export class SearchHotels implements Action {
  readonly type = Types.SearchHotels;

  constructor(public payload?: any) {}
}

export class FetchHotels implements Action {
  readonly type = Types.FetchHotels;

  constructor(public payload?: any) {}
}

export class FetchHotelsDone implements Action {
  readonly type = Types.FetchHotelsDone;

  constructor(public payload: Hotel[]) {}
}

export class FetchHotelsFailed implements Action {
  readonly type = Types.FetchHotelsFailed;

  constructor(public payload: any) {}
}

export type ActionsUnion = FetchHotels | FetchHotelsDone | FetchHotelsFailed;
