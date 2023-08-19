import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaGaraComponent } from './nuova-gara.component';

describe('NuovaGaraComponent', () => {
  let component: NuovaGaraComponent;
  let fixture: ComponentFixture<NuovaGaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuovaGaraComponent]
    });
    fixture = TestBed.createComponent(NuovaGaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
