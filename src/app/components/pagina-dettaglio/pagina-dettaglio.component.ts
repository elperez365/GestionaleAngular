import { Component } from '@angular/core';
import { Gare } from 'src/app/DB/ElencoGare_DB';

@Component({
  selector: 'app-pagina-dettaglio',
  templateUrl: './pagina-dettaglio.component.html',
  styleUrls: ['./pagina-dettaglio.component.scss'],
})
export class PaginaDettaglioComponent {
  product = Gare[1];

  entriesProduct = Object.entries(this.product);

  sbam() {
    console.log(Object.values(this.product));
  }
}
