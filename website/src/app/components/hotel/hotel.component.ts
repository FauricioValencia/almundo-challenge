import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';

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

  @ViewChild('goToHotelBtn')
  goToHotelButton: ElementRef;

  stretchGoToHotelBtn = false;

  Arr = Array;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const mobile = '(max-width: 1149px)';
    const desktop = '(min-width: 1150px)';

    this.breakpointObserver
      .observe(['(max-width: 1149px)', '(min-width: 1150px)'])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[mobile]) {
          this.stretchGoToHotelBtn = true;
        }

        if (state.breakpoints[desktop]) {
          this.stretchGoToHotelBtn = false;
        }
      });
  }
}
