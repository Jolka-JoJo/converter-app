import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsSIComponent } from './units-si.component';

describe('UnitsSIComponent', () => {
  let component: UnitsSIComponent;
  let fixture: ComponentFixture<UnitsSIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsSIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
