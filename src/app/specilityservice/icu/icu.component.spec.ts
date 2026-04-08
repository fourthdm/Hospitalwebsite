import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICUComponent } from './icu.component';

describe('ICUComponent', () => {
  let component: ICUComponent;
  let fixture: ComponentFixture<ICUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ICUComponent]
    });
    fixture = TestBed.createComponent(ICUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
