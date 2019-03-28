import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'am-rating-stars',
  template: `
    <span class="form-check-label">
      <i *ngFor="let item of Arr(rating).fill(1)" class="rating-star"></i>
    </span>
  `,
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {
  @Input()
  rating: number;

  Arr = Array;

  constructor() {}

  ngOnInit() {}
}
