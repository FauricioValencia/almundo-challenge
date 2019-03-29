// --------------

// import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../environments/environment.prod';
import { effects } from './effects';
import { CoreReducers } from './reducers';

export { CoreState } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(CoreReducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class CoreStoreModule {}
