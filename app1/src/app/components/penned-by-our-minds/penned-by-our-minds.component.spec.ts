import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PennedByOurMindsComponent } from './penned-by-our-minds.component';

describe('PennedByOurMindsComponent', () => {
  let component: PennedByOurMindsComponent;
  let fixture: ComponentFixture<PennedByOurMindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PennedByOurMindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PennedByOurMindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
