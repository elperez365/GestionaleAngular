import { ElencoGare } from "../interfaces/elenco_gare";

export let Gare: ElencoGare[] =  [
  {
    id: "1",
    stazione_appaltante: 'ROMA CAPITALE MUNICIPIO XIII',
    Procedura: 'APERTURA',
    ogetto: 'Manutenzione delle strade di stazione Tiburtina',
    importo: '120.000€',
    scadenza: new Date(Date.now()),
    apertura:new Date('31-12-2023'),
    criterio_aggiudicazione: 'Minor Prezzo (ART.97)',
    categoria:'OG3 III-BIS OS12-A',
    inviata:1
  },
    {
    id: "2",
    stazione_appaltante: 'ROMA CAPITALE MUNICIPIO VI',
    Procedura: 'APERTURA',
    ogetto: 'Manutenzione delle strade di stazione Termini',
    importo: '250.000€',
    scadenza: new Date(Date.now()),
    apertura:new Date('31-12-2023'),
    criterio_aggiudicazione: 'Minor Prezzo (ART.97)',
    categoria:'OG3 III-BIS OS15-A',
    inviata:1
  },
    {
    id: "3",
    stazione_appaltante: 'ROMA CAPITALE MUNICIPIO XIII',
    Procedura: 'APERTURA',
    ogetto: 'Manutenzione delle strade di stazione San Pietro',
    importo: '170.000€',
    scadenza: new Date(Date.now()),
    apertura:new Date('31-12-2023'),
    criterio_aggiudicazione: 'Minor Prezzo (ART.97)',
    categoria:'OG3 III-BIS OB42-A',
    inviata:1
  }
];

export const GareTableHeaders: string[] = [
  '↑',                   //BTN per ordine asc / desc
  '',                   //BTN per info su singola gara
  'Stazione Appaltante',
  'Procedura aperta/ristretta',
  'Oggetto',
  'Importo',
  'Scadenza',
  'Apertura',
  'Criterio Aggiudicazione',
  'Categorie',
  'Inviata',
  ''                      //BTN per aggiungere / modificare info su singola gara
]