import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbythousandComponent } from './sortbythousand.component';

describe('SortbythousandComponent', () => {
  let component: SortbythousandComponent;
  let fixture: ComponentFixture<SortbythousandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortbythousandComponent]
    });
    fixture = TestBed.createComponent(SortbythousandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
