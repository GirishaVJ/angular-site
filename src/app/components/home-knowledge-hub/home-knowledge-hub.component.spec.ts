import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKnowledgeHubComponent } from './home-knowledge-hub.component';

describe('HomeKnowledgeHubComponent', () => {
  let component: HomeKnowledgeHubComponent;
  let fixture: ComponentFixture<HomeKnowledgeHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeKnowledgeHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKnowledgeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
