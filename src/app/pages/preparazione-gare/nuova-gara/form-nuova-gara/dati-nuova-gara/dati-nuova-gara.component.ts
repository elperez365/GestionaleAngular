import { Component } from '@angular/core';

@Component({
  selector: 'app-dati-nuova-gara',
  templateUrl: './dati-nuova-gara.component.html',
  styleUrls: ['./dati-nuova-gara.component.scss'],
})
export class DatiNuovaGaraComponent {
  foods = [
    { value: 'steak-0', viewValue: 'One' },
    { value: 'pizza-1', viewValue: 'Two' },
    { value: 'tacos-2', viewValue: 'Three' },
    { value: 'tacos-3', viewValue: 'Four' },
  ];
  selectedFood = this.foods[2].value;
}
