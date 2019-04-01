import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CoreState } from '~/app/store';
import { SearchHotels } from '@store/hotel-list/hotel-list.actions';

@Component({
  selector: 'am-hotel-list',
  template: `
    <section class="am-hotel-list">
      <article
        *ngFor="let hotel of (hotels | async)"
        class="am-hotel-list__item"
      >
        <am-hotel
          class="hotel"
          [name]="hotel.name"
          [stars]="hotel.stars"
          [image]="hotel.image"
          [amenities]="hotel.amenities"
          [price]="hotel.price"
        >
        </am-hotel>
      </article>
    </section>
  `,
  styleUrls: ['./hotel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelListComponent implements OnInit {
  hotels;

  constructor(private store: Store<CoreState>) {
    this.hotels = this.store.pipe(select(s => s.hotelList.hotels));
  }

  ngOnInit() {
    // TODO: remove this line
    this.store.dispatch(new SearchHotels({}));
  }
}
