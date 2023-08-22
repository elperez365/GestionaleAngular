import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoMezziComponent } from './elenco-mezzi.component';

describe('ElencoMezziComponent', () => {
  let component: ElencoMezziComponent;
  let fixture: ComponentFixture<ElencoMezziComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElencoMezziComponent]
    });
    fixture = TestBed.createComponent(ElencoMezziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
