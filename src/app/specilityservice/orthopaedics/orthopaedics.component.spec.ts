import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicsComponent } from './orthopaedics.component';

describe('OrthopaedicsComponent', () => {
  let component: OrthopaedicsComponent;
  let fixture: ComponentFixture<OrthopaedicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrthopaedicsComponent]
    });
    fixture = TestBed.createComponent(OrthopaedicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
