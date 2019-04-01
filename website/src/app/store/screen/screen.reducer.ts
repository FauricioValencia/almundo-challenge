import { Types, ActionsUnion } from './screen.actions';
import { ScreenState } from './screen.state';

export const initialState: ScreenState = {
  mode: window.matchMedia('(min-width: 1150px)').matches ? 'desktop' : 'mobile'
};

export function screenReducer(
  state: ScreenState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.ChangedToDesktop:
      return { ...state, mode: 'desktop' };
    case Types.ChangedToMobile:
      return { ...state, mode: 'mobile' };
    default:
      return state;
  }
}
