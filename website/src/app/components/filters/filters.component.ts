import { ExpandableComponent } from './../expandable/expandable.component';
import { ApplyFilters } from '@store/filters/filters.actions';
import { CoreState } from './../../store/reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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
      value: '1',
      checked: false
    }
  ];

  filtersForm: FormGroup;

  @ViewChild('expandable')
  expandableForm: ExpandableComponent;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<CoreState>,
    private breakpointObserver: BreakpointObserver
  ) {
    this.filtersForm = formBuilder.group({
      name: [undefined],
      stars: [this.options]
    });
  }

  ngOnInit() {
    const mobile = '(max-width: 1149px)';
    const desktop = '(min-width: 1150px)';

    this.breakpointObserver
      .observe(['(max-width: 1149px)', '(min-width: 1150px)'])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[mobile]) {
          this.expandableForm.collapse();
        }

        if (state.breakpoints[desktop]) {
          this.expandableForm.expand();
        }
      });
  }

  getValues() {
    const values = this.filtersForm.value;
    const stars = this.options.filter(o => o.checked).map(o => o.value);

    return { ...values, stars };
  }

  submit() {
    const values = this.getValues();

    this.store.dispatch(new ApplyFilters(values));
  }

  onSelectedStarsChange(event) {
    const values = this.getValues();

    this.store.dispatch(new ApplyFilters(values));
  }
}
