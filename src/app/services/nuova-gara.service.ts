import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NuovaGaraService {
  Gara = {
    numero: '',
    selectedStazione: '',
    apertaRistretta: '',
    selectedGareGroup: '',
    gareGroup2: '-',
    note: '',
    importo: '',
    scadenza: '',
    apertura: '',
    selectedCriterio: '',
  };

  categoriaGara: string[] = ['', ''];
  ribassi: string[];

  constructor() {}
}
