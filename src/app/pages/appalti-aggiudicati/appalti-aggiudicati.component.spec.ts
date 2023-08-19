import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppaltiAggiudicatiComponent } from './appalti-aggiudicati.component';

describe('AppaltiAggiudicatiComponent', () => {
  let component: AppaltiAggiudicatiComponent;
  let fixture: ComponentFixture<AppaltiAggiudicatiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppaltiAggiudicatiComponent]
    });
    fixture = TestBed.createComponent(AppaltiAggiudicatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
