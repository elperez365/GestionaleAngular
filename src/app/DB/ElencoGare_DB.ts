import { ElencoGare } from '../interfaces/elenco_gare';

export let Gare: ElencoGare[] = [
  {
    id: '1',
    stazione_appaltante: 'ROMA CAPITALE MUNICIPIO XIII',
    Procedura: 'aperta',
    oggetto: 'Manutenzione delle strade di stazione Tiburtina',
    importo: '120.000€',
    scadenza: '12/31/2023',
    ora: '15:00',
    apertura: '12/31/2023',
    criterio_aggiudicazione: 'ribasso',
    categoria: 'OG3 III-BIS OS12-A',
    inviata: '1',
    ribasso: '33%',
  },
  {
    id: '2',
    stazione_appaltante: 'ROMA CAPITALE MUNICIPIO VI',
    Procedura: 'manutenzione',
    oggetto: 'Manutenzione delle strade di stazione Termini',
    importo: '250.000€',
    scadenza: '12/31/2023',
    ora: '15:00',
    apertura: '12/31/2023',
    criterio_aggiudicazione: 'ribasso',
    categoria: 'OG3 III-BIS OS15-A',
    inviata: '1',
    ribasso: '33%',
  },
  {
    id: '3',
    stazione_appaltante: 'ROMA CAPITALE MUNICIPIO XIII',
    Procedura: 'aperta',
    oggetto: 'Manutenzione delle strade di stazione San Pietro',
    importo: '170.000€',
    scadenza: '12/31/2023',
    ora: '15:00',
    apertura: '12/31/2023',
    criterio_aggiudicazione: 'ribasso',
    categoria: 'OG3 III-BIS OB42-A',
    inviata: '1',
    ribasso: '33%',
  },
];

export const GareTableHeaders: string[] = [
  'Info',
  'Stazione appaltante',
  'Oggetto',
  'Importo',
];
