import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TintasFrontComponent } from './tintas-front.component';

describe('TintasFrontComponent', () => {
  let component: TintasFrontComponent;
  let fixture: ComponentFixture<TintasFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TintasFrontComponent]
    });
    fixture = TestBed.createComponent(TintasFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
