import { Mezzi } from "../interfaces/mezzi";

export let lista_mezzi: Mezzi[] = [{
    id: '1',
    tipo_veicolo: 'Fiat',
    anno_revisione: new Date('2022-10-01'),
    targa: 'FA 256 HB',
    mese_revisione: 'GENNAIO',
    tipo_patente: 'C',
    assicurazione:'FERMO',
    scadenza_assicurazione: '31-12-2023',
    scadenza_bollo: '31-12-2023',
},
{
    id: '2',
    tipo_veicolo: 'BMW',
    anno_revisione: new Date('2023-05-01'),
    targa: 'GE 512 XT',
    mese_revisione: 'DICEMBRE',
    tipo_patente: 'B2',
    assicurazione:'FERMO',
    scadenza_assicurazione: '31-12-2023',
    scadenza_bollo: '31-12-2023',
},
{
    id: '3',
    tipo_veicolo: 'Corvette',
    anno_revisione: new Date('2022-12-01'),
    targa: 'FA 256 HB',
    mese_revisione: 'AGOSTO',
    tipo_patente: 'C',
    assicurazione:'FERMO',
    scadenza_assicurazione: '31-12-2023',
    scadenza_bollo: '31-12-2023',
}]

export let mezziTableHeaders: string[] =  
[   'Info',
    'Tipo veicolo',
    'Targa',
    'Tipo patente',

]
