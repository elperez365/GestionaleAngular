import { Component, OnInit } from '@angular/core';
import { Gare, GareTableHeaders } from 'src/app/DB/ElencoGare_DB';
import { ElencoGare } from 'src/app/interfaces/elenco_gare';

@Component({
  selector: 'app-elenco-gare',
  templateUrl: './elenco-gare.component.html',
  styleUrls: ['./elenco-gare.component.scss'],
})
export class ElencoGareComponent implements OnInit {
  gare: ElencoGare[];
  gareTableHeaders: string[];

  constructor() {}

  ngOnInit(): void {
    this.gare = Gare;
    this.gareTableHeaders = GareTableHeaders;
  }
}
