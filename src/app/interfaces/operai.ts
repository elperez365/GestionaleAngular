export interface Operaio {
  id: string;
  nome: string;       //si intenda Nome E Cognome
  contratto: string;      //Scelta tra 'Indeterminato', 'Determinato', 'Stage', 'Apprendistato'
  mansione: string;        //Si intenda la tipologia di contratto
  agevolazione?: string;
  assicurazione: Date | undefined;
  scadenze_contratto?: Date[];        
  qualifica: string;
  visita_medica: Date | undefined;
  note?: string;
}