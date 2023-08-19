import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoOperaiComponent } from './elenco-operai.component';

describe('ElencoOperaiComponent', () => {
  let component: ElencoOperaiComponent;
  let fixture: ComponentFixture<ElencoOperaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElencoOperaiComponent]
    });
    fixture = TestBed.createComponent(ElencoOperaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
