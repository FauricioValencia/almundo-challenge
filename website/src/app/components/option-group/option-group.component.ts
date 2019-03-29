import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface Option {
  value: boolean;
  checked: boolean;
  label?: string;
  rating?: number;
}

let nextId = 0;

@Component({
  selector: 'am-option-group',
  templateUrl: './option-group.component.html',
  styleUrls: ['./option-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OptionGroupComponent),
      multi: true
    }
  ]
})
export class OptionGroupComponent implements OnInit, ControlValueAccessor {
  @Input()
  options: Option[];

  @Input()
  type: 'stars' | 'regular' = 'regular';

  @Input()
  header: string;

  id = `am-option-group-${nextId++}`;

  nextOptionId = 0;

  val: any;

  // TODO: make this better
  @Input('value')
  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  constructor() {}

  ngOnInit() {}

  writeValue(value: any): void {
    if (value) {
      this.options = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onOptionClicked(opt) {
    opt.checked = !opt.checked;
  }
}
