import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { ExpandableComponent } from '../expandable/expandable.component';

@Directive({
  selector: '[amExpansionTriggerFor]'
})
export class ExpansionTriggerDirective {
  constructor(private element: ElementRef) {}

  @Input()
  amExpansionTriggerFor: ExpandableComponent;

  // TODO: make the trigger event configurable
  @HostListener('click', ['$event']) onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.amExpansionTriggerFor.toggle(event);
  }
}
