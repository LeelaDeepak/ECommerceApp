import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbikeComponent } from './viewbike.component';

describe('ViewbikeComponent', () => {
  let component: ViewbikeComponent;
  let fixture: ComponentFixture<ViewbikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewbikeComponent]
    });
    fixture = TestBed.createComponent(ViewbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
