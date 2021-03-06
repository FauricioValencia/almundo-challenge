import { CoreStoreModule } from './store/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

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
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ExpansionTriggerDirective } from './components/expansion-trigger/expansion-trigger.directive';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { AmenityComponent } from './components/amenity/amenity.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FiltersComponent,
    OptionGroupComponent,
    RatingStarsComponent,
    ExpandableComponent,
    ExpansionTriggerDirective,
    ButtonComponent,
    InputComponent,
    HotelListComponent,
    HotelComponent,
    AmenitiesComponent,
    AmenityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    CoreStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
