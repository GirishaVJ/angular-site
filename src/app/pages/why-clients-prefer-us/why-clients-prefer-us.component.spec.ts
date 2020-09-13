import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyClientsPreferUsComponent } from './why-clients-prefer-us.component';

describe('WhyClientsPreferUsComponent', () => {
  let component: WhyClientsPreferUsComponent;
  let fixture: ComponentFixture<WhyClientsPreferUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyClientsPreferUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyClientsPreferUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
