import { Component, Input } from '@angular/core';
import { ElencoGare } from 'src/app/interfaces/elenco_gare';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss'],
})
export class CategorieComponent {
  @Input() product:ElencoGare|undefined
  categories = [
    { value: 'OG1', viewValue: 'OG1' },
    { value: 'OG2', viewValue: 'OG2' },
    { value: 'OG3', viewValue: 'OG3' },
    { value: 'OG4', viewValue: 'OG4' },
    { value: 'OG5', viewValue: 'OG5' },
    { value: 'OG6', viewValue: 'OG6' },
    { value: 'OG7', viewValue: 'OG7' },
    { value: 'OG8', viewValue: 'OG8' },
    { value: 'OG9', viewValue: 'OG9' },
    { value: 'OG10', viewValue: 'OG10' },
    { value: 'OG11', viewValue: 'OG11' },
    { value: 'OG12', viewValue: 'OG12' },
    { value: 'OG13', viewValue: 'OG13' },
    { value: 'OS1', viewValue: 'OS1' },
    { value: 'OS2A', viewValue: 'OS2A' },
    { value: 'OS2B', viewValue: 'OS2B' },
    { value: 'OS3', viewValue: 'OS3' },
    { value: 'OS4', viewValue: 'OS4' },
    { value: 'OS5', viewValue: 'OS5' },
    { value: 'OS6', viewValue: 'OS6' },
    { value: 'OS7', viewValue: 'OS7' },
    { value: 'OS8', viewValue: 'OS8' },
    { value: 'OS9', viewValue: 'OS9' },
    { value: 'OS10', viewValue: 'OS10' },
    { value: 'OS11', viewValue: 'OS11' },
    { value: 'OS12A', viewValue: 'OS12A' },
    { value: 'OS12B', viewValue: 'OS12B' },
    { value: 'OS13', viewValue: 'OS13' },
    { value: 'OS14', viewValue: 'OS14' },
    { value: 'OS15', viewValue: 'OS15' },
    { value: 'OS16', viewValue: 'OS16' },
    { value: 'OS17', viewValue: 'OS17' },
    { value: 'OS18A', viewValue: 'OS18A' },
    { value: 'OS18B', viewValue: 'OS18B' },
    { value: 'OS19', viewValue: 'OS19' },
    { value: 'OS20A', viewValue: 'OS20B' },
    { value: 'OS21', viewValue: 'OS21' },
    { value: 'OS22', viewValue: 'OS22' },
    { value: 'OS23', viewValue: 'OS23' },
    { value: 'OS24', viewValue: 'OS24' },
    { value: 'OS25', viewValue: 'OS25' },
    { value: 'OS26', viewValue: 'OS26' },
    { value: 'OS27', viewValue: 'OS27' },
    { value: 'OS28', viewValue: 'OS28' },
    { value: 'OS29', viewValue: 'OS29' },
    { value: 'OS30', viewValue: 'OS30' },
    { value: 'OS31', viewValue: 'OS31' },
    { value: 'OS32', viewValue: 'OS32' },
    { value: 'OS33', viewValue: 'OS33' },
    { value: 'OS34', viewValue: 'OS34' },
    { value: 'OS35', viewValue: 'OS35' },
  ];

  selectedCategory = this.categories[1].value;

  soaQual = [
    { value: 'I', viewValue: 'I (fino a euro 258.000)' },
    { value: 'II', viewValue: 'II (fino a euro 516.000)' },
    { value: 'III', viewValue: 'III (fino a euro 1.033.000)' },
    { value: 'III bis', viewValue: 'III bis (fino a euro 1.500.000)' },
    { value: 'IV', viewValue: 'IV (fino a euro 2.582.000)' },
    { value: 'IV bis', viewValue: 'IV bis (fino a euro 3.500.000)' },
    { value: 'V', viewValue: 'V (fino a euro 5.165.000)' },
    { value: 'VI', viewValue: 'VI (fino a euro 10.329.000)' },
    { value: 'VII', viewValue: 'VII (fino a euro 15.494.000)' },
    { value: 'VIII', viewValue: 'VIII (fino a euro 15.494.000)' },
  ];

  selectedSoaQual = this.soaQual[1].value;
}
