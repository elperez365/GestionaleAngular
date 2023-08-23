import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gare } from 'src/app/DB/ElencoGare_DB';
import { lista_mezzi } from 'src/app/DB/Mezzi_DB';
import { lista_operai } from 'src/app/DB/Operai_DB';
import { impreseAppaltanti } from 'src/app/DB/imprese appaltanti';
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
    } else if (this.categoryProduct === 'mezzi') {
      this.product = lista_mezzi!.find((el) => this.idProduct === el.id)!;
    } else if (this.categoryProduct === 'gara') {
      this.product = Gare!.find((el) => this.idProduct === el.id)!;
    } else if (this.categoryProduct === 'impreseAppaltanti') {
      this.product = impreseAppaltanti!.find((el) => this.idProduct === el.id)!;
    } else alert('id non trovato');
    this.entriesProduct = Object.entries(this.product);
  }

  sbam() {
    console.log(this.route);
  }
}
