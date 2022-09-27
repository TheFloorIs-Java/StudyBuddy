import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwcompletedComponent } from './hwcompleted.component';

describe('HwcompletedComponent', () => {
  let component: HwcompletedComponent;
  let fixture: ComponentFixture<HwcompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwcompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HwcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
