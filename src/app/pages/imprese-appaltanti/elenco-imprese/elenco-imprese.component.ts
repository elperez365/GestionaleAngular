import { Component } from '@angular/core';
import { ImpreseAppaltanti } from 'src/app/interfaces/imprese_appaltanti';
import { impreseAppaltanti } from 'src/app/DB/imprese appaltanti';
@Component({
  selector: 'app-elenco-imprese',
  templateUrl: './elenco-imprese.component.html',
  styleUrls: ['./elenco-imprese.component.scss'],
})
export class ElencoImpreseComponent {
  imprese: string = 'impreseAppaltanti';
  data_body = impreseAppaltanti;
  // data_body: ImpreseAppaltanti[] = [
  //   {
  //     id: String(Math.trunc(Math.random() * 9999)),
  //     nome: 'Impresa 1',
  //     nome_contatto: 'Contatto 1',
  //     telefono: 1234567890,
  //     email: 'Email@dom.gov',
  //     contatti: ['Twitter', 'Telegram', 'Facebook'],
  //   },
  //   {
  //     id: String(Math.trunc(Math.random() * 9999)),
  //     nome: 'Impresa 2',
  //     nome_contatto: 'Contatto 2',
  //     telefono: 12313453120,
  //     email: 'Email@dom.gov',
  //     contatti: ['Twitter', 'Telegram', 'Facebook'],
  //   },
  //   {
  //     id: String(Math.trunc(Math.random() * 9999)),
  //     nome: 'Impresa 3',
  //     nome_contatto: 'Contatto 3',
  //     telefono: 312312312312,
  //     email: 'Email@dom.gov',
  //     contatti: ['Twitter', 'Telegram', 'Facebook'],
  //   },
  // ];

  data_header: string[] = ['Info', 'Nome', 'Email', 'Contatto Principale'];
}
