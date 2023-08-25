import { Component } from '@angular/core';
import { ToDo } from '../nuova-impresa/to-do/todo';
import { TodoService } from '../nuova-impresa/to-do/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { impreseAppaltanti } from 'src/app/DB/imprese appaltanti';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modifica-impresa',
  templateUrl: './modifica-impresa.component.html',
  styleUrls: ['./modifica-impresa.component.scss']
})
export class ModificaImpresaComponent {
  idProduct = this.route.snapshot.paramMap.get('id');
  product = impreseAppaltanti!.find((el) => this.idProduct === el.id)!;
  todos = this.product.altriContatti;
  constructor(public todoService: TodoService, private route: ActivatedRoute) {}
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
   console.log({
        ...this.stazioneForm.value,
      id: this.product.id,
      value: this.stazioneForm.value.nome,
     viewValue: this.stazioneForm.value.nome.toUpperCase(),
       altriContatti: [...this.todos],
   });
   
  }
}


