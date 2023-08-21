import { Operaio } from "../interfaces/operai"

export let lista_operai: Operaio[] = [
  {
    id:'1',
    nome: 'Nikola Tesla',
    contratto: 'Indeterminato',
    assicurazione: new Date(Date.now()),
    scadenze_contratto: [new Date('31-12-2023')],
    qualifica: 'Ingegnere elettronico',
    visita_medica: new Date(Date.now())
  },  {
    id:'2',
    nome: 'Andrè Ampère',
    contratto: 'Indeterminato',
    assicurazione: new Date(Date.now()),
    scadenze_contratto: [new Date('31-12-2023')],
    qualifica: 'Fisico',
    visita_medica: new Date(Date.now())
  },{
    id:'3',
    nome: 'Gustave de Coriolis',
    contratto: 'Indeterminato',
    assicurazione: new Date(Date.now()),
    scadenze_contratto: [new Date('31-12-2023')],
    qualifica: 'Fisico',
    visita_medica: new Date(Date.now())
  },
]

export const OperaioTableHeaders: string[] = [
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











// {
//   id: string;
//   nome: string;       //si intenda Nome E Cognome
//   contratto: string;
//   agevolazione: string;
//   assicurazione?: Date;
//   scadenze_contratto: Date[];
//   qualifica: string;
//   visita_medica: Date
//   note?: string;
// }