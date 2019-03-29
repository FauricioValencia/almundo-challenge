import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as ConstitutionActions from './filters.actions';
import { HotelListActions } from '../hotel-list';
import { of } from 'rxjs';

@Injectable()
export class FiltersEffects {
  @Effect()
  searchHotels = this.actions.pipe(
    ofType(ConstitutionActions.Types.ApplyFilters),
    map(data => {
      return new HotelListActions.SearchHotels(data);
    })
  );

  constructor(private actions: Actions) {}
}
