import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { lista_mezzi } from 'src/app/DB/Mezzi_DB';
import * as uuid from 'uuid';

@Component({
  selector: 'app-modifica-mezzo',
  templateUrl: './modifica-mezzo.component.html',
  styleUrls: ['./modifica-mezzo.component.scss'],
})
export class ModificaMezzoComponent {
  idProduct = this.route.snapshot.paramMap.get('id');
  product = lista_mezzi!.find((el) => this.idProduct === el.id)!;
  selectedMese: String = this.product.mese_revisione.toLowerCase();
  selectedPatente: String = this.product.tipo_patente.toLowerCase();

  patenti = [
    {
      value: 'a',
      viewValue: 'A',
    },
    {
      value: 'b',
      viewValue: 'B',
    },
    {
      value: 'c',
      viewValue: 'C',
    },
    {
      value: 'd',
      viewValue: 'D',
    },
    {
      value: 'e',
      viewValue: 'E',
    },
  ];
  mesi = [
    {
      value: 'gennaio',
      viewValue: 'GENNAIO',
    },
    {
      value: 'febbraio',
      viewValue: 'FABBRAIO',
    },
    {
      value: 'marzo',
      viewValue: 'MARZO',
    },
    {
      value: 'aprile',
      viewValue: 'APRILE',
    },
    {
      value: 'maggio',
      viewValue: 'MAGGIO',
    },
    {
      value: 'giugno',
      viewValue: 'GIUGNO',
    },
    {
      value: 'luglio',
      viewValue: 'LUGLIO',
    },
    {
      value: 'agosto',
      viewValue: 'AGOSTO',
    },
    {
      value: 'settembre',
      viewValue: 'SETTEMBRE',
    },
    {
      value: 'ottobre',
      viewValue: 'OTTOBRE',
    },
    {
      value: 'novembre',
      viewValue: 'NOVEMBRE',
    },
    {
      value: 'dicembre',
      viewValue: 'DICEMBRE',
    },
  ];

  modificaMezzoForm: FormGroup;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.selectedMese);
    this.modificaMezzoForm = new FormGroup({
      tipoVeicolo: new FormControl('', Validators.required),
      targa: new FormControl('', Validators.required),
      annoRevisione: new FormControl('', Validators.required),
      meseRevisione: new FormControl(this.selectedMese, Validators.required),
      note: new FormControl(''),
      tipoPatente: new FormControl(this.selectedPatente, Validators.required),
      assicurazione: new FormControl('', Validators.required),
      scadenzaAssicurazione: new FormControl('', Validators.required),
      scadenzaBollo: new FormControl('', Validators.required),
    });
  }

  // ngDoCheck(): void {

  // }

  onSubmit(event: any) {
    console.log(this.selectedMese);
    console.log(this.selectedPatente);
    // if (this.mezzoForm.status === 'VALID') {
    //   lista_mezzi.push({
    //     id: uuid.v4(),
    //     tipo_veicolo: this.mezzoForm.value.tipoVeicolo,
    //     anno_revisione: this.mezzoForm.value.annoRevisione,
    //     targa: this.mezzoForm.value.targa,
    //     mese_revisione: this.mezzoForm.value.meseRevisione,
    //     tipo_patente: this.mezzoForm.value.tipoPatente,
    //     assicurazione: this.mezzoForm.value.assicurazione,
    //     scadenza_assicurazione:
    //       this.mezzoForm.value.scadenzaAssicurazione.toLocaleDateString(),
    //     scadenza_bollo: this.mezzoForm.value.scadenzaBollo.toLocaleDateString(),
    //   });
    //   console.log(lista_mezzi);
    //   alert('Mezzo inserito con successo');
    // } else alert('Operazione non eseguita,controlla i dati inseriti');
  }
}
