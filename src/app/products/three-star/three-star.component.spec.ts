import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeStarComponent } from './three-star.component';

describe('ThreeStarComponent', () => {
  let component: ThreeStarComponent;
  let fixture: ComponentFixture<ThreeStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeStarComponent]
    });
    fixture = TestBed.createComponent(ThreeStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
