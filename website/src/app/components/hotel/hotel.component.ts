import { Store } from '@ngrx/store';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

// TODO: Improve performance
@Component({
  selector: 'am-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  stars: number;

  @Input()
  amenities: string[];

  @Input()
  price: number;

  _image: string;

  @Input('image')
  set image(src: string) {
    this._image = `/assets/images/hotels/${src}`;
  }

  constructor() {}

  ngOnInit() {}
}
