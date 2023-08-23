import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gare } from 'src/app/DB/ElencoGare_DB';
import { lista_operai } from 'src/app/DB/Operai_DB';
import { Operaio } from 'src/app/interfaces/operai';

@Component({
  selector: 'app-pagina-dettaglio',
  templateUrl: './pagina-dettaglio.component.html',
  styleUrls: ['./pagina-dettaglio.component.scss'],
})
export class PaginaDettaglioComponent {
  product: {};
  idProduct = this.route.snapshot.paramMap.get('id');
  categoryProduct = this.route.snapshot.paramMap.get('cat');
  entriesProduct: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    if (this.categoryProduct === 'operai') {
      this.product = lista_operai!.find((el) => this.idProduct === el.id)!;
    }

    this.entriesProduct = Object.entries(this.product);
  }

  sbam() {
    console.log(this.route);
  }
}
