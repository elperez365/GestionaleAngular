import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaImpresaComponent } from './nuova-impresa.component';

describe('NuovaImpresaComponent', () => {
  let component: NuovaImpresaComponent;
  let fixture: ComponentFixture<NuovaImpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuovaImpresaComponent]
    });
    fixture = TestBed.createComponent(NuovaImpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
