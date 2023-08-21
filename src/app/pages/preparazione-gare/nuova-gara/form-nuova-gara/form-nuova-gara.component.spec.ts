import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuovaGaraComponent } from './form-nuova-gara.component';

describe('FormNuovaGaraComponent', () => {
  let component: FormNuovaGaraComponent;
  let fixture: ComponentFixture<FormNuovaGaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNuovaGaraComponent]
    });
    fixture = TestBed.createComponent(FormNuovaGaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
