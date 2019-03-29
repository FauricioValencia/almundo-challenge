import { Types, ActionsUnion } from './hotel-list.actions';
import { HotelListState } from './hotel-list.state';

export const initialState: HotelListState = {
  hotels: []
};

export function hotelListReducer(
  state: HotelListState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.FetchHotelsDone:
      return { ...state, hotels: action.payload };
    default:
      return state;
  }
}
