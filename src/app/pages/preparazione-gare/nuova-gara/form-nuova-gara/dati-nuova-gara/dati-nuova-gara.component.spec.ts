import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiNuovaGaraComponent } from './dati-nuova-gara.component';

describe('DatiNuovaGaraComponent', () => {
  let component: DatiNuovaGaraComponent;
  let fixture: ComponentFixture<DatiNuovaGaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatiNuovaGaraComponent]
    });
    fixture = TestBed.createComponent(DatiNuovaGaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
