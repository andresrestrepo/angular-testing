import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleQuestionFieldComponent } from './simple-question-field.component';

describe('SimpleQuestionFieldComponent', () => {
  let component: SimpleQuestionFieldComponent;
  let fixture: ComponentFixture<SimpleQuestionFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleQuestionFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleQuestionFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
