import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoMezzoComponent } from './nuovo-mezzo.component';

describe('NuovoMezzoComponent', () => {
  let component: NuovoMezzoComponent;
  let fixture: ComponentFixture<NuovoMezzoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuovoMezzoComponent]
    });
    fixture = TestBed.createComponent(NuovoMezzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
