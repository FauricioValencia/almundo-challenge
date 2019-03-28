import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-layout',
  template: `
    <header class="header">
      <ng-content select="[header]"></ng-content>
    </header>
    <div class="main-container">
      <div class="sidebar">
        <ng-content select="[sidebar]"></ng-content>
      </div>
      <main class="main">
        <ng-content select="[content]"></ng-content>
      </main>
    </div>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
