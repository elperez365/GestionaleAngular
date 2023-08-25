import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastoBackComponent } from './tasto-back.component';

describe('TastoBackComponent', () => {
  let component: TastoBackComponent;
  let fixture: ComponentFixture<TastoBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TastoBackComponent]
    });
    fixture = TestBed.createComponent(TastoBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
