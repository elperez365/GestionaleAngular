import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Operaio } from 'src/app/interfaces/operai';


@Component({
  selector: 'app-nuovo-operaio',
  templateUrl: './nuovo-operaio.component.html',
  styleUrls: ['./nuovo-operaio.component.scss']
})


export class NuovoOperaioComponent implements OnInit{
  //Variabili esclusive per rappresentazione HTML
  contratto: string[] = ['Indeterminato', 'Determinato', 'Stage', 'Apprendistato']                    //Usata per select input 'Tipi di contratto'
  scadenze: Date[] = [new Date(Date.now())]                                   //Usata solo per renderizzare 2 componenti



  //Form listener
  form: Operaio = {
    id: String(Math.trunc(Math.random() * 999999)),
    nome: '',
    contratto: '',
    agevolazione:'',
    assicurazione: new Date(),
    scadenze_contratto: [ 
      ...this.scadenze
    ],
    qualifica: '',
    visita_medica: new Date(),
    note: ''
  }

  operaiForm: FormGroup;
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}
  //Angular Hooks
  ngOnInit() :void {
    this.operaiForm = new FormGroup({
      nome: new FormControl(this.form.nome, [
        Validators.required
      ]),
      contratto: new FormControl(this.form.contratto, [
        Validators.required
      ]),
      assicurazione: new FormControl(this.form.assicurazione, [
        Validators.required
      ]),
      scadenze_contratto: new FormControl(this.form.scadenze_contratto, [
        Validators.required,
        Validators.minLength(1)
      ]),
      qualifica: new FormControl(this.form.qualifica, [
        Validators.required
      ]),
      visita_medica: new FormControl(this.form.visita_medica, [
        Validators.required
      ])
    })
  }


  handleChange(input:any) {
    this.document.getElementById(input)?.classList.add('is-invalid')
    console.log(input)
    
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

}
}


