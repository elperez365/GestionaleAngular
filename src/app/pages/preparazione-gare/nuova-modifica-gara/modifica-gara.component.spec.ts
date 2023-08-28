import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaGaraComponent } from './modifica-gara.component';

describe('ModificaGaraComponent', () => {
  let component: ModificaGaraComponent;
  let fixture: ComponentFixture<ModificaGaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificaGaraComponent]
    });
    fixture = TestBed.createComponent(ModificaGaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
