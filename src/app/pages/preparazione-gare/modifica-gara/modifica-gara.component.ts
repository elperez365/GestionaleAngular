import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gare } from 'src/app/DB/ElencoGare_DB';
import { NuovaGaraService } from 'src/app/services/nuova-gara.service';

@Component({
  selector: 'app-modifica-gara',
  templateUrl: './modifica-gara.component.html',
  styleUrls: ['./modifica-gara.component.scss'],
})
export class ModificaGaraComponent {
  inviata: boolean;
  idProduct = this.route.snapshot.paramMap.get('id');
  product = Gare!.find((el) => this.idProduct === el.id)!;

  constructor(
    public NuovaGara: NuovaGaraService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  onSubmit() {
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
      let indexProduct = Gare!.findIndex((el) => this.idProduct === el.id)!;
      Gare[indexProduct].id = allFormDatas.id;
      Gare[indexProduct].stazione_appaltante = allFormDatas.stazione_appaltante;
      Gare[indexProduct].Procedura = allFormDatas.Procedura;
      Gare[indexProduct].oggetto = allFormDatas.oggetto;
      Gare[indexProduct].importo = allFormDatas.importo;
      Gare[indexProduct].scadenza = allFormDatas.scadenza;
      Gare[indexProduct].ora = allFormDatas.ora;
      Gare[indexProduct].apertura = allFormDatas.apertura;
      Gare[indexProduct].criterio_aggiudicazione =
        allFormDatas.criterio_aggiudicazione;
      Gare[indexProduct].categoria = allFormDatas.categoria;
      Gare[indexProduct].ribasso = allFormDatas.ribasso;
      alert('Modifica avvenuta con successo');
      this.router.navigateByUrl('gare_elenco');
    } else {
      alert('qualcosa non va, controlla i dati inseriti');
      console.log(allFormDatas);
    }
    console.log(Gare);
  }
}
