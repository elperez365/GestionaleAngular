import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibassiComponent } from './ribassi.component';

describe('RibassiComponent', () => {
  let component: RibassiComponent;
  let fixture: ComponentFixture<RibassiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RibassiComponent]
    });
    fixture = TestBed.createComponent(RibassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
