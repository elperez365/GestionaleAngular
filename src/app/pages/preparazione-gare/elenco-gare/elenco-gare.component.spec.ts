import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoGareComponent } from './elenco-gare.component';

describe('ElencoGareComponent', () => {
  let component: ElencoGareComponent;
  let fixture: ComponentFixture<ElencoGareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElencoGareComponent]
    });
    fixture = TestBed.createComponent(ElencoGareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
