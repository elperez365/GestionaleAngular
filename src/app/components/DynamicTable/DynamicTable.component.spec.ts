import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableComponent } from './DynamicTable.component';

describe('ImpostazioniComponent', () => {
  let component: DynamicTableComponent;
  let fixture: ComponentFixture<DynamicTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicTableComponent]
    });
    fixture = TestBed.createComponent(DynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
