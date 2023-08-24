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
  
  todos: ToDo[] = this.todoService.getTodos();
  constructor(public todoService: TodoService) {}
  stazioneForm: FormGroup;

  ngOnInit(): void {
    
    this.stazioneForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      contattoPrincipale: new FormControl('', Validators.required),
      nomeContatto: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  onSubmit(event: any) {
    if (this.stazioneForm.status === 'VALID') {
      impreseAppaltanti.push({
        ...this.stazioneForm.value,
        contatto_Principale:this.stazioneForm.value.contattoPrincipale,
        id: uuid.v4(),
        value: this.stazioneForm.value.nome,
        viewValue: this.stazioneForm.value.nome.toUpperCase(),
        altriContatti: [...this.todos],
      });
      alert('impresa appaltante inserita con successo');
      
    } else alert('Operazione non eseguita,controlla i dati inseriti');
  }
}
