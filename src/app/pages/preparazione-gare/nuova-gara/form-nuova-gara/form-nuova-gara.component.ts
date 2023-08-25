import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NuovaGaraService } from '../../../../services/nuova-gara.service';
import { Gare } from 'src/app/DB/ElencoGare_DB';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-nuova-gara',
  templateUrl: './form-nuova-gara.component.html',
  styleUrls: ['./form-nuova-gara.component.scss'],
})
export class FormNuovaGaraComponent {
  inviata: boolean;

  constructor(public NuovaGara: NuovaGaraService, private router: Router) {}
  onSubmit(event: any) {
    const allFormDatas = {
      id: this.NuovaGara.Gara.numero,
      stazione_appaltante: this.NuovaGara.Gara.selectedStazione,
      Procedura: this.NuovaGara.Gara.apertaRistretta,
      oggetto: this.NuovaGara.Gara.note,
      importo: this.NuovaGara.Gara.importo,
      scadenza: this.NuovaGara.Gara.scadenza,
      ora: '14:00',
      apertura: this.NuovaGara.Gara.apertura,
      criterio_aggiudicazione: this.NuovaGara.Gara.selectedCriterio,
      categoria:
        this.NuovaGara.categoriaGara &&
        this.NuovaGara.categoriaGara.reduce(
          (acc, curr) => acc + '  ' + curr,
          ''
        ),
      inviata: this.inviata ? 'yes' : 'no',
      ribasso: this.NuovaGara.ribassi.reduce(
        (acc, curr) => acc + '  ' + curr,
        ''
      ),
    };
    if (
      allFormDatas.id &&
      allFormDatas.stazione_appaltante &&
      allFormDatas.Procedura &&
      allFormDatas.oggetto &&
      allFormDatas.importo &&
      allFormDatas.scadenza &&
      allFormDatas.ora &&
      allFormDatas.apertura &&
      allFormDatas.criterio_aggiudicazione &&
      allFormDatas.categoria &&
      allFormDatas.ribasso
    ) {
      Gare.push(allFormDatas);
      alert('La nuova Gara è stata inserita');
      this.router.navigateByUrl('gare_elenco');
    } else alert('qualcosa non va, controlla i dati inseriti');
  }
}
