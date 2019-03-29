import { Action } from '@ngrx/store';

const NAMESPACE = 'SEARCH-WIDGET';
const withNamespace = action => `${NAMESPACE} - ${action}`;

// Action Types
export const Types = {
  ApplyFilters: withNamespace('Apply Filters on Hotel List'),
  ApplyFiltersDone: withNamespace('Apply Filters on Hotel List Done')
};

// Actions Creators
export class ApplyFilters implements Action {
  readonly type = Types.ApplyFilters;

  constructor(public payload?: any) {}
}

export class ApplyFiltersDone implements Action {
  readonly type = Types.ApplyFiltersDone;

  constructor(public payload?: any) {}
}

export type ActionsUnion = ApplyFilters | ApplyFiltersDone;
