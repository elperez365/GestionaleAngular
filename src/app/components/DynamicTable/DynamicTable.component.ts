import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-DynamicTable',
  templateUrl: './DynamicTable.component.html',
  styleUrls: ['./DynamicTable.component.scss'],
})
export class DynamicTableComponent {
  @Input() DynTableHeaders: any[];
  @Input() DynTableBody: any[];
  @Input() DynTableArgument: string;

  //Local Variables
  link: string


  constructor( private router: Router) {}

  ngOnInit() :void {
    this.link = `/${this.DynTableArgument}_nuovo`
  }

  Looper(item :any[]) {
    let arr: any[] = []
    for(let key in item) {
      arr.push(item[key])
    }
    return arr
  }
  createPage() {
    this.router.navigateByUrl(this.link)
  }

}
