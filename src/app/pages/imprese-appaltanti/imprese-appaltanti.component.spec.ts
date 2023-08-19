import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpreseAppaltantiComponent } from './imprese-appaltanti.component';

describe('ImpreseAppaltantiComponent', () => {
  let component: ImpreseAppaltantiComponent;
  let fixture: ComponentFixture<ImpreseAppaltantiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpreseAppaltantiComponent]
    });
    fixture = TestBed.createComponent(ImpreseAppaltantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
