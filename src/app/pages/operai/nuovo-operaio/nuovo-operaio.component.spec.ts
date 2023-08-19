import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoOperaioComponent } from './nuovo-operaio.component';

describe('NuovoOperaioComponent', () => {
  let component: NuovoOperaioComponent;
  let fixture: ComponentFixture<NuovoOperaioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuovoOperaioComponent]
    });
    fixture = TestBed.createComponent(NuovoOperaioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
