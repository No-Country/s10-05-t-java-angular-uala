import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCashComponent } from './by-cash.component';

describe('ByCashComponent', () => {
  let component: ByCashComponent;
  let fixture: ComponentFixture<ByCashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByCashComponent]
    });
    fixture = TestBed.createComponent(ByCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
