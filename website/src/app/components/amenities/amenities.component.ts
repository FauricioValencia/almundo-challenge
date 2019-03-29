import { AmenityComponent } from './../amenity/amenity.component';
import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'am-amenities',
  template: `
    <am-amenity
      class="am-hotel-amenity"
      *ngFor="let a of amenities"
      [type]="a"
    ></am-amenity>
  `,
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit {
  @Input()
  amenities;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}
}
