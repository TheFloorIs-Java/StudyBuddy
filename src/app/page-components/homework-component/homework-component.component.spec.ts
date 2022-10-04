import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkComponentComponent } from './homework-component.component';

describe('HomeworkComponentComponent', () => {
  let component: HomeworkComponentComponent;
  let fixture: ComponentFixture<HomeworkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeworkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
