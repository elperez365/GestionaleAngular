import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lista_mezzi } from 'src/app/DB/Mezzi_DB';

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
  scadenzaBoloDate = new Date(this.product.scadenza_bollo);
  scadenzaAssDate = new Date(this.product.scadenza_assicurazione);

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
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.modificaMezzoForm = new FormGroup({
      tipoVeicolo: new FormControl('', Validators.required),
      targa: new FormControl('', Validators.required),
      annoRevisione: new FormControl('', Validators.required),
      meseRevisione: new FormControl(this.selectedMese, Validators.required),
      note: new FormControl(''),
      tipoPatente: new FormControl(this.selectedPatente, Validators.required),
      assicurazione: new FormControl('', Validators.required),
      scadenzaAssicurazione: new FormControl(
        this.scadenzaAssDate.toDateString(),
        Validators.required
      ),
      scadenzaBollo: new FormControl(
        this.scadenzaBoloDate.toDateString(),
        Validators.required
      ),
    });
  }

  // ngDoCheck(): void {

  // }

  onSubmit(event: any) {
    let indexProduct = lista_mezzi!.findIndex(
      (el) => this.idProduct === el.id
    )!;
    lista_mezzi[indexProduct].anno_revisione =
      this.modificaMezzoForm.value.annoRevisione;
    lista_mezzi[indexProduct].mese_revisione =
      this.modificaMezzoForm.value.meseRevisione;
    lista_mezzi[indexProduct].tipo_veicolo =
      this.modificaMezzoForm.value.tipoVeicolo;
    lista_mezzi[indexProduct].targa = this.modificaMezzoForm.value.targa;
    lista_mezzi[indexProduct].tipo_patente =
      this.modificaMezzoForm.value.tipoPatente.toUpperCase();
    lista_mezzi[indexProduct].assicurazione =
      this.modificaMezzoForm.value.assicurazione;
    lista_mezzi[indexProduct].scadenza_assicurazione =
      this.modificaMezzoForm.value.scadenzaAssicurazione.toDateString();
    lista_mezzi[indexProduct].scadenza_bollo =
      this.modificaMezzoForm.value.scadenzaBollo.toDateString();
    console.log(lista_mezzi);
    alert('modifica avvenuta con successo');
    this.router.navigateByUrl('mezzi_elenco');
  }
}
