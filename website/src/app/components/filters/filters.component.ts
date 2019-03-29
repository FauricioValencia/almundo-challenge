import { ApplyFilters } from '@store/filters/filters.actions';
import { CoreState } from './../../store/reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      checked: true
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

  filtersForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<CoreState>
  ) {
    this.filtersForm = formBuilder.group({
      name: [undefined],
      stars: [this.options]
    });
  }

  ngOnInit() {}

  submit() {
    const a = this.filtersForm.value;
    console.log('form state', a);

    const stars = this.options.filter(o => o.checked).map(o => o.value);

    this.store.dispatch(new ApplyFilters({ ...a, stars }));
  }

  getStarsFilter(starOptions: [any]) {
    const checkedStars = starOptions.filter(o => o.checked).map(o => o.value);
    if (checkedStars.includes('all')) {
      return ['all'];
    }
    return checkedStars;
  }
}
