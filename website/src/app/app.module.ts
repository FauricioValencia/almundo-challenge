import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { OptionGroupComponent } from './components/option-group/option-group.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { ExpandableComponent } from './components/expandable/expandable.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FiltersComponent,
    OptionGroupComponent,
    RatingStarsComponent,
    ExpandableComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
