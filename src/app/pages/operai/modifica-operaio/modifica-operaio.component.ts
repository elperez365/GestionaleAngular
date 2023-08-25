import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lista_operai } from 'src/app/DB/Operai_DB';
import { Operaio } from 'src/app/interfaces/operai';

@Component({
  selector: 'app-modifica-operaio',
  templateUrl: './modifica-operaio.component.html',
  styleUrls: ['./modifica-operaio.component.scss'],
})
export class ModificaOperaioComponent {
  //============== Query getters
  id = this.route.snapshot.paramMap.get('id');
  user = lista_operai!.find((u) => this.id === u.id)!;

  //Variabili esclusive per rappresentazione HTML
  contratti: string[] = [
    'Indeterminato',
    'Determinato',
    'Stage',
    'Apprendistato',
  ]; //Usata per select input 'Tipi di contratto'
  mansioni: string[] = ['Edile', 'Medico', 'Industriale', 'Elettronico'];
  scadenze: Date[] = [new Date(Date.now())]; //Usata solo per renderizzare 2 componenti

  //Local variables

  form: Operaio = {
    ...this.user,
  };

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  //=============== Angular Hooks ==================
  ngOnInit(): void {
    // console.log(this.form)
  }
  // ============= Form controller ==================
  operaiForm = this.formBuilder.group({
    nome: new FormControl([
      this.form.nome,
      {
        validators: [Validators.required],
      },
    ]),
    agevolazione: new FormControl([this.form.agevolazione, {}]),
    contratto: new FormControl([
      this.form.contratto,
      {
        validators: [Validators.required],
      },
    ]),
    mansione: new FormControl([
      this.form.mansione,
      {
        validators: [Validators.required],
      },
    ]),
    assicurazione: new FormControl([
      this.form.assicurazione,
      {
        validators: [Validators.required],
      },
    ]),
    qualifica: new FormControl([
      this.form.qualifica,
      {
        validators: [Validators.required],
      },
    ]),
    visita_medica: new FormControl([
      this.form.visita_medica,
      {
        validators: [Validators.required],
      },
    ]),
  });

  // ============= Form getters ==================
  get nome() {
    return this.operaiForm.controls['nome'];
  }
  get contratto() {
    return this.operaiForm.controls['contratto'];
  }
  get mansione() {
    return this.operaiForm.controls['mansione'];
  }
  get assicurazione() {
    return this.operaiForm.controls['assicurazione'];
  }
  get qualifica() {
    return this.operaiForm.controls['qualifica'];
  }
  get visita_medica() {
    return this.operaiForm.controls['visita_medica'];
  }
  // ============= Local functions ==================
  editScadenza(option: string): void {
    switch (option) {
      case 'add':
        this.scadenze.push(new Date());
        break;
      case 'delete':
        if (this.scadenze.length > 1) {
          this.scadenze.pop();
        }
        break;
    }
  }

  handleSubmit(s: any) {
    lista_operai.forEach((item, index) => {
      if (item === this.user) lista_operai.splice(index, 1);
    });
    lista_operai.push(this.form);
    this.router.navigateByUrl('operai_elenco');
  }
}
