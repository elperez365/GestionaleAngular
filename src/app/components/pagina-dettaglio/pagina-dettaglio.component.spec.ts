import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDettaglioComponent } from './pagina-dettaglio.component';

describe('PaginaDettaglioComponent', () => {
  let component: PaginaDettaglioComponent;
  let fixture: ComponentFixture<PaginaDettaglioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDettaglioComponent]
    });
    fixture = TestBed.createComponent(PaginaDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
