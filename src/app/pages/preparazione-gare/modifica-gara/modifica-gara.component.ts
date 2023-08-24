import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gare } from 'src/app/DB/ElencoGare_DB';
import { NuovaGaraService } from 'src/app/services/nuova-gara.service';

@Component({
  selector: 'app-modifica-gara',
  templateUrl: './modifica-gara.component.html',
  styleUrls: ['./modifica-gara.component.scss']
})
export class ModificaGaraComponent {
  inviata: boolean;
  idProduct = this.route.snapshot.paramMap.get('id');
  product = Gare!.find((el) => this.idProduct === el.id)!;

  constructor(public NuovaGara: NuovaGaraService, private route: ActivatedRoute) {}
  onSubmit(event: any) {
    console.log("submit")
  //   const allFormDatas = {
  //     id: this.NuovaGara.Gara.numero,
  //     stazione_appaltante: this.NuovaGara.Gara.selectedStazione,
  //     Procedura: this.NuovaGara.Gara.apertaRistretta,
  //     oggetto: this.NuovaGara.Gara.note,
  //     importo: this.NuovaGara.Gara.importo,
  //     scadenza: this.NuovaGara.Gara.scadenza,
  //     ora: '14:00',
  //     apertura: this.NuovaGara.Gara.apertura,
  //     criterio_aggiudicazione: this.NuovaGara.Gara.selectedCriterio,
  //     categoria:
  //       this.NuovaGara.categoriaGara &&
  //       this.NuovaGara.categoriaGara.reduce(
  //         (acc, curr) => acc + '  ' + curr,
  //         ''
  //       ),
  //     inviata: this.inviata ? 'yes' : 'no',
  //     ribasso: this.NuovaGara.ribassi.reduce(
  //       (acc, curr) => acc + '  ' + curr,
  //       ''
  //     ),
  //   };
  //   if (
  //     allFormDatas.id &&
  //     allFormDatas.stazione_appaltante &&
  //     allFormDatas.Procedura &&
  //     allFormDatas.oggetto &&
  //     allFormDatas.importo &&
  //     allFormDatas.scadenza &&
  //     allFormDatas.ora &&
  //     allFormDatas.apertura &&
  //     allFormDatas.criterio_aggiudicazione &&
  //     allFormDatas.categoria &&
  //     allFormDatas.ribasso
  //   ) {
  //     Gare.push(allFormDatas);
  //     alert('La nuova Gara è stata inserita');
  //   } else alert('qualcosa non va, controlla i dati inseriti');
  }
}


