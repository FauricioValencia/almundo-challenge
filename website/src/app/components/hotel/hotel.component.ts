import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'am-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  numberOfStars: number;

  @Input()
  amenities: string[];

  @Input()
  price: number;

  _image: string;

  @Input('image')
  set image(src: string) {
    this._image = `/assets/images/hotels/${src}`;
  }

  @HostBinding('class')
  class = 'card';

  Arr = Array;

  constructor() {}

  ngOnInit() {}
}
