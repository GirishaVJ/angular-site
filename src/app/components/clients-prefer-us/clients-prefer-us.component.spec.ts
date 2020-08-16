import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsPreferUsComponent } from './clients-prefer-us.component';

describe('ClientsPreferUsComponent', () => {
  let component: ClientsPreferUsComponent;
  let fixture: ComponentFixture<ClientsPreferUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsPreferUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsPreferUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
