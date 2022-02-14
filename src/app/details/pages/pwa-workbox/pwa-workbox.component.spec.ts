import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaWorkboxComponent } from './pwa-workbox.component';

describe('PwaWorkboxComponent', () => {
  let component: PwaWorkboxComponent;
  let fixture: ComponentFixture<PwaWorkboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwaWorkboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaWorkboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
