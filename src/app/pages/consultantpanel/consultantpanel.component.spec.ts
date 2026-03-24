import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantpanelComponent } from './consultantpanel.component';

describe('ConsultantpanelComponent', () => {
  let component: ConsultantpanelComponent;
  let fixture: ComponentFixture<ConsultantpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultantpanelComponent]
    });
    fixture = TestBed.createComponent(ConsultantpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
