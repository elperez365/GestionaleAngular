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
 
 
   //Local variables
   user: Operaio | undefined; 
   form: Operaio;
   id = this.route.snapshot.paramMap.get('id')
 
   operaiForm: FormGroup;
   constructor(
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,
     private router: Router
   ) {}
   //Angular Hooks
   ngOnInit() :void {
     this.user =  lista_operai.find(u => u.id === this.id)
     
   //Form listener
   if(this.user) {
     this.form = {...this.user}
   }
   else{
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
     this.router.navigateByUrl('operai_elenco')
   } 
} 
