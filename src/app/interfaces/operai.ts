export interface Operaio {
  id: string;
  nome: string;       //si intenda Nome E Cognome
  contratto: string;
  mansione?: string;
  agevolazione?: string;
  assicurazione: Date;
  scadenze_contratto?: Date[];
  qualifica: string;
  visita_medica: Date
  note?: string;
}