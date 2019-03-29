import { Types, ActionsUnion } from './filters.actions';
import { FiltersState } from './filters.state';

export const initialState: FiltersState = {
  name: undefined,
  stars: undefined
};

export function filtersReducer(
  state: FiltersState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.ApplyFilters:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
