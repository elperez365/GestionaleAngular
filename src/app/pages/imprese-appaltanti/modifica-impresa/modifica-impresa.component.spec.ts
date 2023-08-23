import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaImpresaComponent } from './modifica-impresa.component';

describe('ModificaImpresaComponent', () => {
  let component: ModificaImpresaComponent;
  let fixture: ComponentFixture<ModificaImpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificaImpresaComponent]
    });
    fixture = TestBed.createComponent(ModificaImpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
