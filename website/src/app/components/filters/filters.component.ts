import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  options = [
    {
      label: 'Todas las estrellas',
      value: 'all',
      checked: false
    },
    {
      rating: 5,
      value: '5',
      checked: false
    },
    {
      rating: 4,
      value: '4',
      checked: false
    },
    {
      rating: 3,
      value: '3',
      checked: false
    },
    {
      rating: 2,
      value: '2',
      checked: false
    },
    {
      rating: 1,
      value: '2',
      checked: false
    }
  ];

  constructor() {}

  ngOnInit() {}
}
