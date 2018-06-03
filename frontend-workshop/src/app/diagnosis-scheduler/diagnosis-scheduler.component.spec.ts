import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisSchedulerComponent } from './diagnosis-scheduler.component';

describe('DiagnosisSchedulerComponent', () => {
  let component: DiagnosisSchedulerComponent;
  let fixture: ComponentFixture<DiagnosisSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
