import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStarComponent } from './two-star.component';

describe('TwoStarComponent', () => {
  let component: TwoStarComponent;
  let fixture: ComponentFixture<TwoStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoStarComponent]
    });
    fixture = TestBed.createComponent(TwoStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
