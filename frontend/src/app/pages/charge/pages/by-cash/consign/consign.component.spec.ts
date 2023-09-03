import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignComponent } from './consign.component';

describe('ConsignComponent', () => {
  let component: ConsignComponent;
  let fixture: ComponentFixture<ConsignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsignComponent]
    });
    fixture = TestBed.createComponent(ConsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
