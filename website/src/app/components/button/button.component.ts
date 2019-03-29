import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'am-button',
  template: `
    <button
      [ngClass]="{
        'am-button': true,
        'am-button--accent': accent
      }"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  accent = false;

  constructor() {}

  ngOnInit() {}
}
