import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrueFalseQuestionComponent } from './true-false-question.component';

describe('TrueFalseQuestionComponent', () => {
  let component: TrueFalseQuestionComponent;
  let fixture: ComponentFixture<TrueFalseQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueFalseQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueFalseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
