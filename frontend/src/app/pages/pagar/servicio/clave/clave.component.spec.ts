import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaveComponent } from './clave.component';

describe('ClaveComponent', () => {
  let component: ClaveComponent;
  let fixture: ComponentFixture<ClaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaveComponent]
    });
    fixture = TestBed.createComponent(ClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
