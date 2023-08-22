import { ElencoGare } from '../interfaces/elenco_gare';

export let Gare: ElencoGare[] = [
  {
    id: '1',
    stazione_appaltante: 'ROMA CAPITALE MUNICIPIO XIII',
    Procedura: 'APERTURA',
    ogetto: 'Manutenzione delle strade di stazione Tiburtina',
    importo: '120.000€',
    scadenza: '31-12-2023',
    ora:"15:00",
    apertura: '31-12-2023',
    criterio_aggiudicazione: 'Minor Prezzo (ART.97)',
    categoria: 'OG3 III-BIS OS12-A',
    inviata: '1',
    ribasso:"33%",
  },
  {
    id: '2',
    stazione_appaltante: 'ROMA CAPITALE MUNICIPIO VI',
    Procedura: 'MANUTENZIONE',
    ogetto: 'Manutenzione delle strade di stazione Termini',
    importo: '250.000€',
    scadenza: '31-12-2023',
    ora:"15:00",
    apertura: '31-12-2023',
    criterio_aggiudicazione: 'Minor Prezzo (ART.97)',
    categoria: 'OG3 III-BIS OS15-A',
    inviata: '1',
    ribasso:"33%",
  },
  {
    id: '3',
    stazione_appaltante: 'ROMA CAPITALE MUNICIPIO XIII',
    Procedura: 'APERTURA',
    ogetto: 'Manutenzione delle strade di stazione San Pietro',
    importo: '170.000€',
    scadenza: '31-12-2023',
    ora:"15:00",
    apertura: '31-12-2023',
    criterio_aggiudicazione: 'Minor Prezzo (ART.97)',
    categoria: 'OG3 III-BIS OB42-A',
    inviata: '1',
    ribasso:"33%",
  },
];

export const GareTableHeaders: string[] = [
  '↑', //BTN per ordine asc / desc

  'Stazione Appaltante',
  'Procedura aperta/ristretta',
  'Oggetto',
  'Importo',
  'Scadenza',
  'Ora',
  'Apertura',
  'Criterio Aggiudicazione',
  'Categorie',
  'Inviata',
  'Ribasso',
  // 'Polizza',
  // 'Sopralluoghi',
  '', //BTN per aggiungere / modificare info su singola gara
];
