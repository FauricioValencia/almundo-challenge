import { Component, OnInit, Input } from '@angular/core';

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
  styleUrls: ['./option-group.component.scss']
})
export class OptionGroupComponent implements OnInit {
  @Input()
  options: [Option];

  @Input()
  type: 'stars' | 'regular' = 'regular';

  @Input()
  header: string;

  id = `am-option-group-${nextId++}`;

  nextOptionId = 0;

  Arr = Array;

  constructor() {}

  ngOnInit() {}

  nextId() {
    return `${this.id}__option${this.nextOptionId++}`;
  }
}
