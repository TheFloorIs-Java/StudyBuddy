import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwcompletedListComponent } from './hwcompleted-list.component';

describe('HwcompletedListComponent', () => {
  let component: HwcompletedListComponent;
  let fixture: ComponentFixture<HwcompletedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwcompletedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HwcompletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
