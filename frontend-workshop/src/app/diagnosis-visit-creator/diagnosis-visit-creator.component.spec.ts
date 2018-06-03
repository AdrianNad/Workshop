import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisVisitCreatorComponent } from './diagnosis-visit-creator.component';

describe('DiagnosisVisitCreatorComponent', () => {
  let component: DiagnosisVisitCreatorComponent;
  let fixture: ComponentFixture<DiagnosisVisitCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisVisitCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisVisitCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
