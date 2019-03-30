import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'am-button',
  template: `
    <button
      [ngClass]="{
        'am-button': true,
        'am-button--accent': accent,
        'am-button--large': large,
        'am-button--stretch': stretch
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

  @Input()
  large = false;

  @Input()
  @HostBinding('class.stretched')
  private stretch = false;

  constructor() {}

  ngOnInit() {}
}
