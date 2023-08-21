import { Component, SimpleChanges } from '@angular/core';
import { NuovaGaraService } from '../../../../../services/nuova-gara.service';

@Component({
  selector: 'app-dati-nuova-gara',
  templateUrl: './dati-nuova-gara.component.html',
  styleUrls: ['./dati-nuova-gara.component.scss'],
})
export class DatiNuovaGaraComponent {
  numero: string;
  selectedStazione: string;
  apertaRistretta: string;
  selectedGareGroup: string;
  gareGroup2: string;
  note: string;
  importo: string = '€';
  scadenza: Date;
  apertura: Date;
  selectedCriterio: string;

  constructor(public nuovaGaraService: NuovaGaraService) {}
  StazioniAppaltanti = [
    {
      value: 'ROMA CAPITALE MUNICIPIO XIII',
      viewValue: 'ROMA CAPITALE MUNICIPIO XIII',
    },
    {
      value: 'ROMA CAPITALE MUNICIPIO VI',
      viewValue: 'ROMA CAPITALE MUNICIPIO VI',
    },
  ];

  apRis = [
    {
      value: 'aperta',
      viewValue: 'Aperta',
    },
    {
      value: 'ristretta',
      viewValue: 'Ristretta',
    },
  ];

  gareGroup = [
    {
      value: 'tuttogare',
      viewValue: 'Tutto gare',
    },
  ];
  criteriAggiudicazione = [
    {
      value: 'offerta tecnica',
      viewValue: 'Offerta tecnica',
    },
    {
      value: 'ribasso',
      viewValue: 'Ribasso',
    },
    {
      value: 'percentuale',
      viewValue: 'Percentuale',
    },
  ];

  // ngOnInit(): void {
  //   console.log(this.nuovaGaraService.Gara);
  // }

  ngDoCheck(): void {
    this.nuovaGaraService.Gara.numero = this.numero;
    this.nuovaGaraService.Gara.selectedStazione = this.selectedStazione;
    this.nuovaGaraService.Gara.apertaRistretta = this.apertaRistretta;
    this.nuovaGaraService.Gara.selectedGareGroup = this.selectedGareGroup;
    this.nuovaGaraService.Gara.gareGroup2 = this.gareGroup2;
    this.nuovaGaraService.Gara.note = this.note;
    this.nuovaGaraService.Gara.importo = this.importo;
    this.scadenza &&
      (this.nuovaGaraService.Gara.scadenza = this.scadenza.toDateString());
    this.apertura &&
      (this.nuovaGaraService.Gara.apertura = this.apertura.toDateString());
    this.nuovaGaraService.Gara.selectedCriterio = this.selectedCriterio;
  }
}

// this.nuovaGaraService.addToNuovaGara('numero', this.numero);
