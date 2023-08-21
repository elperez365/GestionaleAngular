import { Component, Input } from '@angular/core';
import { Operaio } from 'src/app/interfaces/operai';

@Component({
  selector: 'app-DynamicTable',
  templateUrl: './DynamicTable.component.html',
  styleUrls: ['./DynamicTable.component.scss'],
})
export class DynamicTableComponent {
  @Input() DynTableHeaders: any[];
  @Input() DynTableBody: any[];

  constructor() {}

  ngOnInit() :void {
  }

  Looper(item :any[]) {
    let arr: any[] = []
    for(let key in item) {
      arr.push(item[key])
    }
    return arr
  }

}
