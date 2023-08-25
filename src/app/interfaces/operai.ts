export interface Operaio {
  id: string;
  nome: string; //si intenda Nome E Cognome
  contratto: string; //Scelta tra 'Indeterminato', 'Determinato', 'Stage', 'Apprendistato'
  mansione: string; //Si intenda la tipologia di contratto
  agevolazione?: string;
  assicurazione: string | undefined;
  scadenze_contratto?: string[] | undefined[] | any;
  qualifica: string;
  visita_medica: string | undefined;
  note?: string;
}
