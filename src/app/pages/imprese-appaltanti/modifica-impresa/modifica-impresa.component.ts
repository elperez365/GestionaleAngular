import { Component } from '@angular/core';
import { ToDo } from '../nuova-impresa/to-do/todo';
import { TodoService } from '../nuova-impresa/to-do/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { impreseAppaltanti } from 'src/app/DB/imprese appaltanti';
import { ActivatedRoute, Router } from '@angular/router';
import * as uuid from 'uuid';
@Component({
  selector: 'app-modifica-impresa',
  templateUrl: './modifica-impresa.component.html',
  styleUrls: ['./modifica-impresa.component.scss'],
})
export class ModificaImpresaComponent {
  idProduct  = this.route.snapshot.paramMap.get('id');
  product = this.route.snapshot.paramMap.get('id')? impreseAppaltanti!.find((el) => this.idProduct === el.id)! : {nome:"", altriContatti : [], id:"", nomeContatto:"", contatto_Principale:"", email:""} ;
  todos = this.product ? this.product.altriContatti : [];
  constructor(
    public todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
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
    let indexProduct = impreseAppaltanti!.findIndex(
      (el) => this.idProduct === el.id
    )!;
    (impreseAppaltanti[indexProduct].altriContatti = [...this.todos]),
      (impreseAppaltanti[indexProduct].id = this.idProduct ? this.idProduct : uuid.v4() ),
      (impreseAppaltanti[indexProduct].value = this.stazioneForm.value.nome),
      (impreseAppaltanti[indexProduct].viewValue =
        this.stazioneForm.value.nome.toUpperCase()),
      (impreseAppaltanti[indexProduct].contatto_Principale =
        this.stazioneForm.value.contattoPrincipale);
    impreseAppaltanti[indexProduct].nome = this.stazioneForm.value.nome;
    impreseAppaltanti[indexProduct].nomeContatto =
      this.stazioneForm.value.nomeContatto;
    impreseAppaltanti[indexProduct].email = this.stazioneForm.value.email;
    alert('Modifica effettuata con successo');
    this.router.navigateByUrl('imprese_elenco');
  }
}
