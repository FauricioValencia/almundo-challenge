import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HotelListActions } from '../hotel-list';
import { of } from 'rxjs';
import * as FiltersActions from './filters.actions';

@Injectable()
export class FiltersEffects {
  @Effect()
  searchHotels = this.actions.pipe(
    ofType(FiltersActions.Types.ApplyFilters),
    map((action: FiltersActions.ApplyFiltersDone) => {
      return new HotelListActions.SearchHotels(action.payload);
    })
  );

  constructor(private actions: Actions) {}
}
