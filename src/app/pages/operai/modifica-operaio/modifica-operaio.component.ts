import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lista_operai } from 'src/app/DB/Operai_DB';
import { Operaio } from 'src/app/interfaces/operai';

@Component({
  selector: 'app-modifica-operaio',
  templateUrl: './modifica-operaio.component.html',
  styleUrls: ['./modifica-operaio.component.scss']
})
export class ModificaOperaioComponent {
//Variabili esclusive per rappresentazione HTML
contratti: string[] = ['Indeterminato', 'Determinato', 'Stage', 'Apprendistato'];             //Usata per select input 'Tipi di contratto'
mansione: string[] = ['Edile', 'Medico', 'Industriale', 'Elettronico'];
scadenze: Date[] = [new Date(Date.now())];                       //Usata solo per renderizzare 2 componenti
formValid:boolean = true;
idProduct = this.route.snapshot.paramMap.get('id');
product = lista_operai!.find((el) => this.idProduct === el.id)!;


//Local variables
form: Operaio;

operaiForm: FormGroup;
constructor(
  private formBuilder: FormBuilder,
  private router: Router,
  private route: ActivatedRoute
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
  console.log("submit")
}
} 
