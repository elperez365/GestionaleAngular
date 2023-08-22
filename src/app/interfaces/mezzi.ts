export interface Mezzi {
    id: string,
    tipo_veicolo: string,
    anno_revisione: Date,
    targa: string,
    mese_revisione: string,
    note?: string,
    tipo_patente: string,
    assicurazione:string,
    scadenza_assicurazione: Date,
    scadenza_bollo: Date
}