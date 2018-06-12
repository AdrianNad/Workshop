import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedRepairComponent } from './ordered-repair.component';

describe('OrderedRepairComponent', () => {
  let component: OrderedRepairComponent;
  let fixture: ComponentFixture<OrderedRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
