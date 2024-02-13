import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbyfivethousandComponent } from './sortbyfivethousand.component';

describe('SortbyfivethousandComponent', () => {
  let component: SortbyfivethousandComponent;
  let fixture: ComponentFixture<SortbyfivethousandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortbyfivethousandComponent]
    });
    fixture = TestBed.createComponent(SortbyfivethousandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
