import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcarComponent } from './viewcar.component';

describe('ViewcarComponent', () => {
  let component: ViewcarComponent;
  let fixture: ComponentFixture<ViewcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcarComponent]
    });
    fixture = TestBed.createComponent(ViewcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
