import { Component } from '@angular/core';
import { Mezzi } from 'src/app/interfaces/mezzi';
import { lista_mezzi, mezziTableHeaders } from 'src/app/DB/Mezzi_DB';


@Component({
  selector: 'app-elenco-mezzi',
  templateUrl: './elenco-mezzi.component.html',
  styleUrls: ['./elenco-mezzi.component.scss']
})
export class ElencoMezziComponent {
  //Table variables
  mezzi_header: string[] = mezziTableHeaders;
  mezzi_db: Mezzi[] = lista_mezzi;
  mezzi: string = 'mezzi';

}
