import { Component } from '@angular/core';
import { OperaioTableHeaders, lista_operai } from 'src/app/DB/Operai_DB';
import { Operaio } from 'src/app/interfaces/operai';

@Component({
  selector: 'app-elenco-operai',
  templateUrl: './elenco-operai.component.html',
  styleUrls: ['./elenco-operai.component.scss']
})
export class ElencoOperaiComponent {
  //Variabili Locali 
  operaio_header: string[] = OperaioTableHeaders
  operaio_db: Operaio[] = lista_operai
}
