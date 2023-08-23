import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gare } from 'src/app/DB/ElencoGare_DB';

@Component({
  selector: 'app-pagina-dettaglio',
  templateUrl: './pagina-dettaglio.component.html',
  styleUrls: ['./pagina-dettaglio.component.scss'],
})
export class PaginaDettaglioComponent {
  product = Gare[1];

  entriesProduct = Object.entries(this.product);

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.route.snapshot.params);
  }
  sbam() {
    console.log(Object.values(this.product));
  }
}
