import { Component, OnInit } from '@angular/core';
import { THREE_HELPER } from '../shared/helpers/three.helper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    THREE_HELPER.init();
  }

}
