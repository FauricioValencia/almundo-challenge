import { HotelsService } from './../../services/hotels.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as HotelListActions from './hotel-list.actions';
import {} from '../hotel-list';
import { of } from 'rxjs';

@Injectable()
export class HotelListEffects {
  @Effect()
  searchHotels = this.actions.pipe(
    ofType(HotelListActions.Types.SearchHotels),
    map((action: HotelListActions.SearchHotels) => {
      return new HotelListActions.FetchHotels(action.payload);
    })
  );

  @Effect()
  fetchHotels = this.actions.pipe(
    ofType(HotelListActions.Types.FetchHotels),
    switchMap((action: HotelListActions.FetchHotels) =>
      this.hotelsService.fetchHotels(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => {
          return new HotelListActions.FetchHotelsDone(data);
        }),
        // If request fails, dispatch failed action
        catchError(error => of(new HotelListActions.FetchHotelsFailed(error)))
      )
    )
  );

  constructor(private actions: Actions, private hotelsService: HotelsService) {}
}
