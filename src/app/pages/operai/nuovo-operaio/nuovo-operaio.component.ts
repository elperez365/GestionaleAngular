import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Operaio } from 'src/app/interfaces/operai';
import { lista_operai } from 'src/app/DB/Operai_DB';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-nuovo-operaio',
  templateUrl: './nuovo-operaio.component.html',
  styleUrls: ['./nuovo-operaio.component.scss'],
})
export class NuovoOperaioComponent implements OnInit {
  //Variabili esclusive per rappresentazione HTML
  contratti: string[] = [
    'Indeterminato',
    'Determinato',
    'Stage',
    'Apprendistato',
  ]; //Usata per select input 'Tipi di contratto'
  mansioni: string[] = ['Edile', 'Medico', 'Industriale', 'Elettronico'];
  scadenze: Date[] = [new Date(Date.now())]; //Usata solo per renderizzare 2 componenti
  form: Operaio = {
    id: uuidv4(),
    nome: '',
    contratto: '',
    mansione: '',
    agevolazione: '',
    assicurazione: '',
    scadenze_contratto: [...this.scadenze],
    qualifica: '',
    visita_medica: '',
    note: '',
  };
  id = this.route.snapshot.paramMap.get('id');
  user = lista_operai.find((u) => u.id === this.id);
  //Local variables

  operaiForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  //=============== Angular Hooks ==================
  ngOnInit(): void {
    if (this.user) {
      this.form = {
        ...this.user,
      };
    } else {
      this.operaiForm = new FormGroup({
        nome: new FormControl(this.form.nome, Validators.required),
        contratto: new FormControl(this.form.contratto, Validators.required),
        mansione: new FormControl(this.form.mansione, Validators.required),
        agevolazione: new FormControl(
          this.form.agevolazione,
          Validators.required
        ),
        assicurazione: new FormControl(
          this.form.assicurazione,
          Validators.required
        ),
        scadenze_contratto: new FormControl(this.form.scadenze_contratto),
        qualifica: new FormControl(this.form.qualifica, Validators.required),
        visita_medica: new FormControl(
          this.form.visita_medica,
          Validators.required
        ),
        note: new FormControl(this.form.note),
      });
    }
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

  onSubmit(event: any) {
    if (this.operaiForm.status === 'VALID') {
      lista_operai.push({
        id: this.form.id,
        nome: this.operaiForm.value.nome,
        contratto: this.operaiForm.value.contratto,
        mansione: this.operaiForm.value.mansione,
        agevolazione: this.operaiForm.value.agevolazione,
        assicurazione: this.operaiForm.value.assicurazione,
        scadenze_contratto: this.operaiForm.value.scadenze_contratto,
        qualifica:
          this.operaiForm.value.qualifica,
          visita_medica: this.operaiForm.value.visita_medica.toDateString(),
      });
      this.operaiForm.reset();
      this.router.navigateByUrl('operai_elenco');
    } else alert('Operazione non eseguita,controlla i dati inseriti');
  }
}
