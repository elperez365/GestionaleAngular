import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaMezzoComponent } from './modifica-mezzo.component';

describe('ModificaMezzoComponent', () => {
  let component: ModificaMezzoComponent;
  let fixture: ComponentFixture<ModificaMezzoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificaMezzoComponent]
    });
    fixture = TestBed.createComponent(ModificaMezzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
