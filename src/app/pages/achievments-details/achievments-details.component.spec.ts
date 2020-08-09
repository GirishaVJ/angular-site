import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievmentsDetailsComponent } from './achievments-details.component';

describe('AchievmentsDetailsComponent', () => {
  let component: AchievmentsDetailsComponent;
  let fixture: ComponentFixture<AchievmentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievmentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievmentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
