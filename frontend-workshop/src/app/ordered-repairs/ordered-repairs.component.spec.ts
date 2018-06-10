import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedRepairsComponent } from './ordered-repairs.component';

describe('OrderedRepairsComponent', () => {
  let component: OrderedRepairsComponent;
  let fixture: ComponentFixture<OrderedRepairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedRepairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
