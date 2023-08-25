import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from './to-do/todo.service';
import { ToDo } from './to-do/todo';
import { impreseAppaltanti } from 'src/app/DB/imprese appaltanti';
import * as uuid from 'uuid';

@Component({
  selector: 'app-nuova-impresa',
  templateUrl: './nuova-impresa.component.html',
  styleUrls: ['./nuova-impresa.component.scss'],
})
export class NuovaImpresaComponent {
  todos: ToDo[];
  constructor(public todoService: TodoService, private router: Router) {}
  stazioneForm: FormGroup;

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.stazioneForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      contattoPrincipale: new FormControl('', Validators.required),
      nomeContatto: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  ngOnDestroy(): void {
    this.todoService.resetTodos();
  }

  onSubmit(event: any) {
    if (this.stazioneForm.status === 'VALID') {
      impreseAppaltanti.push({
        ...this.stazioneForm.value,
        contatto_Principale: this.stazioneForm.value.contattoPrincipale,
        id: uuid.v4(),
        value: this.stazioneForm.value.nome,
        viewValue: this.stazioneForm.value.nome.toUpperCase(),
        altriContatti: [...this.todos],
      });
      alert('impresa appaltante inserita con successo');
      this.stazioneForm.reset();
      this.router.navigateByUrl('imprese_elenco');
    } else alert('Operazione non eseguita,controlla i dati inseriti');
  }
}
