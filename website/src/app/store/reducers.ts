import { ActionReducerMap, Store } from '@ngrx/store';

import { FiltersActions, FiltersState, filtersReducer } from './filters';
import {
  HotelListActions,
  HotelListState,
  hotelListReducer
} from './hotel-list';

// The top level Echoes Player application interface
// each reducer is reponsible for manipulating a certain state
export interface CoreState {
  hotelList: HotelListState;
  filters: FiltersState;
  // router: RouterReducerState;
}

export const CoreReducers: ActionReducerMap<CoreState> = {
  hotelList: hotelListReducer,
  filters: filtersReducer
};

export const CoreActionTypes = [FiltersActions.Types, HotelListActions.Types];
