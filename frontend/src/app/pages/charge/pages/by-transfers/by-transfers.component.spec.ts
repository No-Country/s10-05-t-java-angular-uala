import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTransfersComponent } from './by-transfers.component';

describe('ByTransfersComponent', () => {
  let component: ByTransfersComponent;
  let fixture: ComponentFixture<ByTransfersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByTransfersComponent]
    });
    fixture = TestBed.createComponent(ByTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
