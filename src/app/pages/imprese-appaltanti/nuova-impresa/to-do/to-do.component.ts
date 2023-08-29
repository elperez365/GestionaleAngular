import { Component, Input } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ToDo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent {
  @Input() todoMod: any;
  idePanelOpened = true;
  public showSidebar = false;
  inputFg: UntypedFormGroup = Object.create(null);
  todoId = 6;
  copyTodos: ToDo[];
  selectedCategory = 'all';
  editSave = 'Edit';
  isDisabled: Boolean = false;
  todos: ToDo[];
  impreseForm: FormGroup;
  // = this.todoService.getTodos();

  constructor(public fb: UntypedFormBuilder, public todoService: TodoService) {
    this.copyTodos = this.todos;
  }

  mobileSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  ngOnInit(): void {
    this.impreseForm = new FormGroup({
      newName: new FormControl(''),
      newTel: new FormControl(''),
      newEmail: new FormControl(''),
    });
    this.todoMod
      ? (this.todos = this.todoMod)
      : (this.todos = this.todoService.getTodos());
    this.todoMod
      ? (this.copyTodos = this.todoMod)
      : (this.copyTodos = this.todoService.getTodos());
    this.inputFg = this.fb.group({
      mess: [],
    });
  }

  ngDoCheck(): void {
    console.log(this.impreseForm.value);
    // this.isDisabled = () => {
    //   const newName = this.inputFg.get('newName');
    //   const newTel = this.inputFg.get('newTel');
    //   const newMail = this.inputFg.get('newMail');
    //   if (!newTel && !newName && !newMail) {
    //     return false;
    //   } else return true;
    // };
  }

  addTodo(): void {
    // if (this.inputFg?.get('mess')?.value.trim().length === 0) {
    //   return;
    // }
    this.todos.splice(0, 0, {
      id: this.todoId,
      message:
        this.impreseForm.value.newName +
        ' - ' +
        this.impreseForm.value.newTel +
        ' - ' +
        this.impreseForm.value.newEmail,
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
    this.todos.splice(id, 1);
  }

  remainingList(): number {
    return this.todos.filter((todo) => !todo.completionStatus).length;
  }
  ngOnDestroy(): void {
    this.todos = [];
    this.copyTodos = [];
  }
}
