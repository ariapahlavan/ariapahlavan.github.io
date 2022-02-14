import { Component, OnInit } from '@angular/core';

import { environment as env } from '../../../../environments/environment';

@Component({
  selector: 'app-pwa-workbox',
  templateUrl: './pwa-workbox.component.html',
  styleUrls: ['./pwa-workbox.component.scss']
})
export class PwaWorkboxComponent implements OnInit {
  section1 = require('!raw-loader!./sections/section-1.md').default;


  constructor() { }

  ngOnInit(): void {
    this.section1 = this.section1.replaceAll(/\/assets/g, env.assetsPath);
  }

}
