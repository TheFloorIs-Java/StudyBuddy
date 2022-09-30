import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateGradeComponent } from './add-update-grade.component';

describe('AddGradeComponent', () => {
  let component: AddUpdateGradeComponent;
  let fixture: ComponentFixture<AddUpdateGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
