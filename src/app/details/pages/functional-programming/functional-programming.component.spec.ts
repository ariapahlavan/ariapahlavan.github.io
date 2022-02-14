import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalProgrammingComponent } from './functional-programming.component';

describe('FunctionalProgrammingComponent', () => {
  let component: FunctionalProgrammingComponent;
  let fixture: ComponentFixture<FunctionalProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalProgrammingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
