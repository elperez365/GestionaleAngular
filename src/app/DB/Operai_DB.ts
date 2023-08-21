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
  {
    id:'4',
    nome: 'Isaac Newton',
    contratto: 'Indeterminato',
    assicurazione: new Date(Date.now()),
    scadenze_contratto: [new Date('31-12-2023')],
    qualifica: 'Fisico',
    visita_medica: new Date(Date.now())
  },
]

export const OperaioTableHeaders: string[] = [
  'id',
  'Nome',
  'Contratto',
  'Agevolazione',
  'Assicurazione',
  'Qualifica',
  'Visita Medica',
  'Note'
]
