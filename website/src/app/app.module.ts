import { CoreStoreModule } from './store/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { OptionGroupComponent } from './components/option-group/option-group.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FiltersComponent,
    OptionGroupComponent,
    RatingStarsComponent,
    ExpandableComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
