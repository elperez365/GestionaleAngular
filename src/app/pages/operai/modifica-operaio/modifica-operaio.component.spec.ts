import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaOperaioComponent } from './modifica-operaio.component';

describe('ModificaOperaioComponent', () => {
  let component: ModificaOperaioComponent;
  let fixture: ComponentFixture<ModificaOperaioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificaOperaioComponent]
    });
    fixture = TestBed.createComponent(ModificaOperaioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
