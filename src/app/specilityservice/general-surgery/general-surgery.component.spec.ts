import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSurgeryComponent } from './general-surgery.component';

describe('GeneralSurgeryComponent', () => {
  let component: GeneralSurgeryComponent;
  let fixture: ComponentFixture<GeneralSurgeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralSurgeryComponent]
    });
    fixture = TestBed.createComponent(GeneralSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
