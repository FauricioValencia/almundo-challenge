import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'am-amenity',
  template: `
    <span class="am-hotel-amenity"></span>
  `,
  styleUrls: ['./amenity.component.scss']
})
export class AmenityComponent implements OnInit {
  @Input()
  set type(iconType: string) {
    this.setIcon(iconType);
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit() {}

  setIcon(iconType: string) {
    this.renderer.addClass(this.hostElement.nativeElement, `amt-${iconType}`);
  }
}
