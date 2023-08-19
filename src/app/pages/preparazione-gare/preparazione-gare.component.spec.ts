import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparazioneGareComponent } from './preparazione-gare.component';

describe('PreparazioneGareComponent', () => {
  let component: PreparazioneGareComponent;
  let fixture: ComponentFixture<PreparazioneGareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreparazioneGareComponent]
    });
    fixture = TestBed.createComponent(PreparazioneGareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
