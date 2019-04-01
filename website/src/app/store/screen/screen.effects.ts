import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HotelListActions } from '../hotel-list';
import { of } from 'rxjs';
import * as ScreenActions from './screen.actions';

const desktop = '(min-width: 1150px)';

@Injectable()
export class ScreenEffects {
  @Effect()
  breakpoint = this.breakpointObserver
    .observe([desktop])
    .pipe(
      map(result =>
        result.matches
          ? new ScreenActions.ChangedToDesktop()
          : new ScreenActions.ChangedToMobile()
      )
    );

  constructor(
    private actions: Actions,
    private breakpointObserver: BreakpointObserver
  ) {}
}
