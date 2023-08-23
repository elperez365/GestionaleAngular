import { Component, OnInit, OnChanges} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Operaio } from 'src/app/interfaces/operai';
import { lista_operai } from 'src/app/DB/Operai_DB';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuovo-operaio',
  templateUrl: './nuovo-operaio.component.html',
  styleUrls: ['./nuovo-operaio.component.scss']
})


export class NuovoOperaioComponent implements OnInit{
  //Variabili esclusive per rappresentazione HTML
  contratti: string[] = ['Indeterminato', 'Determinato', 'Stage', 'Apprendistato'];             //Usata per select input 'Tipi di contratto'
  mansione: string[] = ['Edile', 'Medico', 'Industriale', 'Elettronico'];
  scadenze: Date[] = [new Date(Date.now())];                       //Usata solo per renderizzare 2 componenti
  formValid:boolean = true;


  //Local variables
  form: Operaio;

  operaiForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  //Angular Hooks
  ngOnInit() :void {
    
  //Form listener
  this.form = {
    id: String(Math.trunc(Math.random() * 999999)),
    nome: '',
    contratto: '',
    mansione: '',
    agevolazione:'',
    assicurazione: undefined,
    scadenze_contratto: [ 
      ...this.scadenze
    ],
    qualifica: '',
    visita_medica: undefined,
    note: ''
  }

  }

  handleChange() {
    let { nome, contratto, mansione, assicurazione, qualifica, visita_medica} = this.form
    if(  !nome|| !contratto|| !mansione|| !assicurazione|| !qualifica|| !visita_medica) {
      return
    }
    else {
      this.formValid = false
    }
  }
  editScadenza(option: string):void {
    switch(option) {
      case 'add' :
        this.scadenze.push(new Date())
        break;
      case 'delete': 
        if( this.scadenze.length > 1) {
          this.scadenze.pop()
        }
        break;
    }
  }

  handleSubmit(s: any) {
    lista_operai.push(this.form)
    this.router.navigateByUrl('operai_elenco')
  } 
}


