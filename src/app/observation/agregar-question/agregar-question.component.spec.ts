import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarQuestionComponent } from './agregar-question.component';

describe('AgregarQuestionComponent', () => {
  let component: AgregarQuestionComponent;
  let fixture: ComponentFixture<AgregarQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarQuestionComponent]
    });
    fixture = TestBed.createComponent(AgregarQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
