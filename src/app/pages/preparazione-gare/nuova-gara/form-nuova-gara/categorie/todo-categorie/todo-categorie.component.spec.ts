import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCategorieComponent } from './todo-categorie.component';

describe('TodoCategorieComponent', () => {
  let component: TodoCategorieComponent;
  let fixture: ComponentFixture<TodoCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCategorieComponent]
    });
    fixture = TestBed.createComponent(TodoCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
