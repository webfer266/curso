import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonginComponent } from './longin.component';

describe('LonginComponent', () => {
  let component: LonginComponent;
  let fixture: ComponentFixture<LonginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LonginComponent]
    });
    fixture = TestBed.createComponent(LonginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
