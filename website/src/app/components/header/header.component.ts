import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-header',
  template: `
    <div class="am-header">
      <a href="#" class="am-header__brand">
        <img
          class="am-header__brand__logo"
          src="/assets/images/logo-almundo.svg"
          alt="logo"
        />
      </a>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
