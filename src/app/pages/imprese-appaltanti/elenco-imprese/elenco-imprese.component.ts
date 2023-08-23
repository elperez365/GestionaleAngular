import { Component } from '@angular/core';
import { ImpreseAppaltanti } from 'src/app/interfaces/imprese_appaltanti';
@Component({
  selector: 'app-elenco-imprese',
  templateUrl: './elenco-imprese.component.html',
  styleUrls: ['./elenco-imprese.component.scss'],
})
export class ElencoImpreseComponent {
  imprese: string = 'Imprese Appaltanti'; //Usato per l'header della tabella

  data_body: ImpreseAppaltanti[] = [
    {
      id: String(Math.trunc(Math.random() * 9999)),
      nome: 'Impresa 1',
      nome_contatto: 'Contatto 1',
      telefono: 1234567890,
      email: 'Email@dom.gov',
      contatti: ['Twitter', 'Telegram', 'Facebook'],
    },
    {
      id: String(Math.trunc(Math.random() * 9999)),
      nome: 'Impresa 2',
      nome_contatto: 'Contatto 2',
      telefono: 1234567890,
      email: 'Email@dom.gov',
      contatti: ['Twitter', 'Telegram', 'Facebook'],
    },
    {
      id: String(Math.trunc(Math.random() * 9999)),
      nome: 'Impresa 2',
      nome_contatto: 'Contatto 2',
      telefono: 1234567890,
      email: 'Email@dom.gov',
      contatti: ['Twitter', 'Telegram', 'Facebook'],
    },
  ];

  data_header: string[] = ['Info', 'Nome', 'Telefono', 'Email'];
}
