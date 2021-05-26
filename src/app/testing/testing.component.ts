import { Component, HostBinding, OnInit } from '@angular/core';
import { SMOOTH_ENTRANCE_2, SMOOTH_FILTER_1 } from '../shared/constants/animations-triggers';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const HEROES: string[] = ['Superman', 'Batman', 'Spiderman', 'Wonderwoman', 'Batwoman'];


const animations = [
  SMOOTH_ENTRANCE_2(),
  SMOOTH_FILTER_1
];


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  animations: [
    ...animations
  ]
})
export class TestingComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;

  get heroes() {
    return this._heroes;
  }

  private _heroes: string[] = [];

  ngOnInit() {
    of(HEROES)
      .pipe(delay(2000))
      .subscribe(x => this._heroes = x);
    // this._heroes = [...HEROES];
  }

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';
    this._heroes = HEROES.filter(hero => hero.toLowerCase().includes(criteria.toLowerCase()));
  }
}
