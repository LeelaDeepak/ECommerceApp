import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourStarComponent } from './four-star.component';

describe('FourStarComponent', () => {
  let component: FourStarComponent;
  let fixture: ComponentFixture<FourStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourStarComponent]
    });
    fixture = TestBed.createComponent(FourStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
