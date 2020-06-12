import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAnimationComponent } from './banner-animation.component';

describe('BannerAnimationComponent', () => {
  let component: BannerAnimationComponent;
  let fixture: ComponentFixture<BannerAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
