import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbytwothousandComponent } from './sortbytwothousand.component';

describe('SortbytwothousandComponent', () => {
  let component: SortbytwothousandComponent;
  let fixture: ComponentFixture<SortbytwothousandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortbytwothousandComponent]
    });
    fixture = TestBed.createComponent(SortbytwothousandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
