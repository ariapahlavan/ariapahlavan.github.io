import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface TrackerContent {
  pushUp: number;
  pullUp: number;
  sitUp: number;
}
@Component({
  selector: 'app-workout-tracker',
  templateUrl: './workout-tracker.component.html',
  styleUrls: ['./workout-tracker.component.scss']
})
export class WorkoutTrackerComponent implements OnInit {
  DAY_COUNT_KEY = 'tracker_day_count';

  daysSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  counts$ = this.daysSubject.asObservable().pipe(
    map(daysPassed => ({
      pushUp: Math.ceil(Math.fround(daysPassed / 3)),
      sitUp: Math.floor(Math.fround(daysPassed / 6)),
      pullUp: Math.floor(Math.fround(daysPassed / 9))
    }))
  );

  constructor(private storageService: LocalStorageService) { }

  ngOnInit(): void {
    const daysPassed = this.storageService.valueOf(this.DAY_COUNT_KEY, 0);
    this.daysSubject.next(daysPassed);
  }

  nextDay() {
    const updatedDaysPassed = this.daysSubject.getValue() + 1;
    this.updateDay(updatedDaysPassed);
  }

  prevDay() {
    const updatedDaysPassed = this.daysSubject.getValue() - 1;
    if (updatedDaysPassed >= 0) {
      this.updateDay(updatedDaysPassed);
    }
  }

  private updateDay(daysPassed) {
    this.storageService.upsert(this.DAY_COUNT_KEY, daysPassed);
    this.daysSubject.next(daysPassed);
  }
}
