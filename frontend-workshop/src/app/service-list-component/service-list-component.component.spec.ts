import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListComponentComponent } from './service-list-component.component';

describe('ServiceListComponentComponent', () => {
  let component: ServiceListComponentComponent;
  let fixture: ComponentFixture<ServiceListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
