import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'am-rating-stars',
  template: `
    <span class="form-check-label">
      <i
        *ngFor="let item of Arr(rating).fill(1)"
        [ngClass]="{
          'rating-star': true,
          'rating-star--medium': size === 'medium'
        }"
      ></i>
    </span>
  `,
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {
  @Input()
  rating: number;

  @Input()
  size: 'regular' | 'medium' = 'regular';

  Arr = Array;

  constructor() {}

  ngOnInit() {}
}
