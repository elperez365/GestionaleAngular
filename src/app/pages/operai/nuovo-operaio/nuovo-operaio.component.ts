import { Component } from '@angular/core';


@Component({
  selector: 'app-nuovo-operaio',
  templateUrl: './nuovo-operaio.component.html',
  styleUrls: ['./nuovo-operaio.component.scss']
})


export class NuovoOperaioComponent {
  //Variabili esclusive per rappresentazione HTML
  contratto: string[] = ['Indeterminato', 'Determinato', 'Stage', 'Apprendistato']                    //Usata per select input 'Tipi di contratto'
  scadenze: Date[] = [new Date(Date.now()), new Date('2023-12-31')]                                   //Usata solo per renderizzare 2 componenti

}
