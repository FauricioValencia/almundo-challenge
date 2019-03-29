import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'am-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss']
})
export class ExpandableComponent implements OnInit {
  @ViewChild('toggleInput')
  toggleButton: ElementRef;

  @Input()
  noCaret = true;

  @Input()
  checked = true;

  constructor() {}

  ngOnInit() {}

  toggle(event) {
    this.toggleButton.nativeElement.click();
  }

  expand() {
    this.checked = true;
  }

  collapse() {
    this.checked = false;
  }
}
