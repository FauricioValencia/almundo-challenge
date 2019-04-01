import { Action } from '@ngrx/store';

const NAMESPACE = '[DEVICE SCREEN]';
const withNamespace = action => `${NAMESPACE} - ${action}`;

// Action Types
export const Types = {
  ChangedToDesktop: withNamespace('Changed to desktop'),
  ChangedToMobile: withNamespace('Changed to mobile')
};

// Actions Creators
export class ChangedToDesktop implements Action {
  readonly type = Types.ChangedToDesktop;

  constructor(public payload?: any) {}
}

export class ChangedToMobile implements Action {
  readonly type = Types.ChangedToMobile;

  constructor(public payload?: any) {}
}

export type ActionsUnion = ChangedToDesktop | ChangedToMobile;
