import { Component, Input, SimpleChanges } from '@angular/core';
import { NuovaGaraService } from '../../../../../services/nuova-gara.service';
import { impreseAppaltanti } from 'src/app/DB/imprese appaltanti';
import { CriteriAggiudicazione } from 'src/app/DB/CriteriAggiudicazione';
import { StatiProcedura } from 'src/app/DB/StatiProcedura';
import { GareGroup } from 'src/app/DB/Garegroup';
import { ElencoGare } from 'src/app/interfaces/elenco_gare';
@Component({
  selector: 'app-dati-nuova-gara',
  templateUrl: './dati-nuova-gara.component.html',
  styleUrls: ['./dati-nuova-gara.component.scss'],
})
export class DatiNuovaGaraComponent {
  @Input() product: ElencoGare|undefined;
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
  StazioniAppaltanti = impreseAppaltanti;
  criteriAggiudicazione = CriteriAggiudicazione;
  apRis = StatiProcedura;
  gareGroup = GareGroup;
  constructor(public nuovaGaraService: NuovaGaraService) {}

  ngOnInit(): void {
    if (this.product) {
      this.numero = this.product.id;
      this.selectedStazione = this.product.stazione_appaltante;
      this.apertaRistretta = this.product.Procedura;
      this.importo = this.product.importo;
      this.scadenza = new Date(this.product.scadenza);
      this.apertura = new Date(this.product.apertura);
      this.note = this.product.oggetto;
      this.selectedCriterio = this.product.criterio_aggiudicazione;
    }
  }

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
