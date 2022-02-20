import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NginxRecaptchaComponent } from './nginx-recaptcha.component';

describe('NginxRecaptchaComponent', () => {
  let component: NginxRecaptchaComponent;
  let fixture: ComponentFixture<NginxRecaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NginxRecaptchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NginxRecaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
