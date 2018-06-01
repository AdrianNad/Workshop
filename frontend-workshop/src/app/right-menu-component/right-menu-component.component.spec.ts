import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMenuComponentComponent } from './right-menu-component.component';

describe('RightMenuComponentComponent', () => {
  let component: RightMenuComponentComponent;
  let fixture: ComponentFixture<RightMenuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightMenuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
