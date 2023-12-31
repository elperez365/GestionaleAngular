import { Component, Input } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { ToDo } from './todo';
import { TodoService } from './todo.service';
import { NuovaGaraService } from '../../../../../../services/nuova-gara.service';
import { ElencoGare } from 'src/app/interfaces/elenco_gare';

@Component({
  selector: 'app-todo-categorie',
  templateUrl: './todo-categorie.component.html',
  styleUrls: ['./todo-categorie.component.scss'],
})
export class TodoCategorieComponent {
  @Input() selectedCat1: string;
  @Input() selectedCat2: string;
  @Input() product: ElencoGare | undefined;

  sidePanelOpened = true;
  public showSidebar = false;
  inputFg: UntypedFormGroup = Object.create(null);
  todoId = 6;
  copyTodos: ToDo[];
  selectedCategory = 'all';
  searchText: string | null;
  editSave = 'Edit';

  todos: ToDo[] = this.todoService.getTodos();

  constructor(
    public fb: UntypedFormBuilder,
    public todoService: TodoService,
    public NuovaGara: NuovaGaraService
  ) {
    this.copyTodos = this.todos;
  }
  ngDoCheck(): void {
    this.NuovaGara.categoriaGara = this.todos.map((el) => el.message);
  }
  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  mobileSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  ngOnInit(): void {
    if (this.product && this.product.categoria !== "") {
      this.todos = [{ message: this.product.categoria, id: 0, edit: false }];
      this,
        (this.copyTodos = [
          { message: this.product.categoria, id: 0, edit: false },
        ]);
    }
    this.inputFg = this.fb.group({
      mess: [],
    });
  }
  ngOnDestroy(): void {
    this.todoService.resetTodos();
  }

  addTodo(value: string): void {
    // if (this.inputFg?.get('mess')?.value.trim().length === 0) {
    //   return;
    // }
    this.todos.splice(0, 0, {
      id: this.todoId,
      message: `${this.selectedCat1} ${this.selectedCat2}`,
      completionStatus: false,
      edit: false,
      date: new Date(),
    });
    this.copyTodos = this.todos;
    this.todoId++;
    this.inputFg.patchValue({
      mess: '',
    });
  }

  allTodos(): void {
    // tslint:disable-next-line - Disables all
    this.todos.forEach(
      (todo) =>
        (todo.completionStatus = (<HTMLInputElement>event!.target).checked)
    );
  }

  selectionlblClick(val: string): void {
    if (val === 'all') {
      this.copyTodos = this.todos;
      this.selectedCategory = 'all';
    } else if (val === 'uncomplete') {
      this.copyTodos = this.todos.filter((todo) => !todo.completionStatus);
      this.selectedCategory = 'uncomplete';
    } else if (val === 'complete') {
      this.copyTodos = this.todos.filter((x) => x.completionStatus);
      this.selectedCategory = 'complete';
    }
  }

  editTodo(i: number, str: string): void {
    if (this.copyTodos) {
      if (str === 'edit') {
        // tslint:disable-next-line - Disables all
        this.copyTodos.find((x) => x.id === i)!.edit = true;
      } else {
        // tslint:disable-next-line - Disables all
        this.copyTodos.find((x) => x.id === i)!.edit = false;
      }
    }
  }

  deleteTodo(id: number): void {
    console.log(id);
    this.todos.splice(id, 1);
  }

  remainingList(): number {
    return this.todos.filter((todo) => !todo.completionStatus).length;
  }
}
