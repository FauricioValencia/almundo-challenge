import { ActionReducerMap, Store } from '@ngrx/store';

import { ScreenActions, ScreenState, screenReducer } from './screen';
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
  screen: ScreenState;
  // router: RouterReducerState;
}

export const CoreReducers: ActionReducerMap<CoreState> = {
  hotelList: hotelListReducer,
  filters: filtersReducer,
  screen: screenReducer
};

export const CoreActionTypes = [
  FiltersActions.Types,
  HotelListActions.Types,
  ScreenActions.Types
];
