import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientsPreferUsComponent } from './page-clients-prefer-us.component';

describe('PageClientsPreferUsComponent', () => {
  let component: PageClientsPreferUsComponent;
  let fixture: ComponentFixture<PageClientsPreferUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClientsPreferUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientsPreferUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
