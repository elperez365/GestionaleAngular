import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-DynamicTable',
  templateUrl: './DynamicTable.component.html',
  styleUrls: ['./DynamicTable.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  //Input variables
  @Input() DynTableHeaders!: any[];
  @Input() DynTableBody: any[];
  @Input() DynTableArgument: string;
  @Input() idOperaio: string;

  //Local Variables
  searchField = new FormControl();
  searchSubscription!: Subscription;
  staticCounter: number = 0; //serve a limitare gli output della tabella in base al numero di item richiesti
  dataSourceLoaderSubscription!: Subscription;
  order: string = ''; //ordine delle freccie negli header della tabella
  chosen: string = ''; //Rifermiento dell'ordine della tabella

  //Session Storage Variables
  searchBody: string;
  pagesBody: string;
  orderBody: string;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  private newSubject = new BehaviorSubject<string>('');

  private dataSubject = new BehaviorSubject<any[]>([]);
  private sortSubject = new BehaviorSubject<{
    active: string;
    direction: string;
  }>({ active: 'id', direction: '' });
  pageSubject = new BehaviorSubject<{ pageIndex: number; pageSize: number }>({
    pageIndex: 0,
    pageSize: 5,
  });
  private searchSubject = new BehaviorSubject<string>('');

  dataSource$: Observable<any[] | any> = this.dataSubject.asObservable();

  displayedColumns: string[] = this.DynTableHeaders;

  hideJobs: boolean = true;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.searchBody = `searchItem_${this.DynTableArgument}`; //Variabile Session Storage
    this.pagesBody = `pagesItem_${this.DynTableArgument}`;
    this.orderBody = `orderItem_${this.DynTableArgument}`;
    //Session Storage Manager => this.searchBody : 'value'
    if (sessionStorage[this.searchBody]) {
      this.searchField.patchValue(sessionStorage[this.searchBody]);
      this.searchSubject.next(sessionStorage[this.searchBody]);
    }
    if (sessionStorage[this.orderBody]) {
      this.sortSubject.next({
        active: JSON.parse(sessionStorage[this.orderBody]).active,
        direction: JSON.parse(sessionStorage[this.orderBody]).direction,
      });
    } else {
      this.sortSubject.next({ active: 'id', direction: '' });
    }

    //Paginator Manager => pageSize = N° item per pagina,
    if (sessionStorage[this.pagesBody]) {
      this.pageSubject.next({
        pageIndex: JSON.parse(sessionStorage[this.pagesBody]).pageIndex,
        pageSize: JSON.parse(sessionStorage[this.pagesBody]).pageSize,
      });

      this.paginator.pageIndex = this.pageSubject.value.pageIndex;
      this.paginator.pageSize = this.pageSubject.value.pageSize;
    }

    this.bindSearch();
    this.loadData();
  }
  //Uses Session storage to remember past values
  bindSearch() {
    this.searchSubscription = this.searchField.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((term) => {
        this.changeSearch(term),
          sessionStorage.setItem(this.searchBody, this.searchSubject.value);
      });
  }

  searchBarChange() {}

  loadData() {
    this.dataSourceLoaderSubscription = combineLatest([
      this.sortSubject,
      this.pageSubject,
      this.searchSubject,
      this.newSubject,
    ])
      .pipe(
        tap(() => this.dataSubject.next([])),
        debounceTime(200),
        tap(() => {
          this.DynTableBody; //Prima riportava service.getTotalItems(sort, page, search)
        }),
        // switchMap(() => {
        //   this.DynTableBody;          //Prima riportava service.getAllItems(sort, page, search)
        // }),
        catchError(() => of([])),
        tap((data: any) => {
          this.dataSubject.next(data);
        })
      )
      .subscribe();
  }

  changeSearch(term: string) {
    this.searchSubject.next(term);
    this.paginator.pageIndex = 0;
    this.pageSubject.next({ pageIndex: 0, pageSize: this.paginator.pageSize });
    if (term != '') {
      this.sortSubject.next({ active: '', direction: '' });
    } else {
      this.sortSubject.next({ active: 'id', direction: '' });
    }
  }

  changeSort($event: any) {
    this.sortSubject.next($event);
    this.paginator.pageIndex = 0;
    this.pageSubject.next({ pageIndex: 0, pageSize: this.paginator.pageSize });
  }

  changePage($event: any) {
    console.log($event);
    this.pageSubject.next({
      pageIndex: $event.pageIndex + 1,
      pageSize: $event.pageSize,
    });
    sessionStorage.setItem('pageItem', JSON.stringify(this.pageSubject.value));
  }
  // FUNZIONI DI SABRI
  Looper(item: any[]) {
    let arr: any[] = [];
    for (let key in item) {
      let Key: any = (key[0].toUpperCase() + key.slice(1)).replace('_', ' ');
      if (this.DynTableHeaders.includes(Key)) {
        arr.push(item[key]);
      }
    }
    return arr;
  }
  Order(str: string) {
    //if the order has been called many times on the same header ( changes arrow order )
    if (this.chosen === str) {
      this.chosen = str;
      switch (this.order) {
        case '':
          this.order = 'up';
          sessionStorage.setItem(str, this.order);
          break;
        case 'up':
          this.order = 'down';
          sessionStorage.setItem(str, this.order);
          break;
        case 'down':
          this.order = '';
          sessionStorage.removeItem(str);
          break;
      }
    }
    //if the header has been clicked for the first time (delets old sessionStorage, puts the arrow on top)
    else {
      Object.keys(sessionStorage).map(item => sessionStorage.removeItem(item))
      this.chosen = str;
      this.order = 'up'
      sessionStorage.setItem(str,this.order)
    }
  } 
  get totalLength(): number {
    //console.log('totalCount: '+ this.workerService.totalCount);
    return this.DynTableBody.length;
  }

  // get isLoading$(): Observable<boolean> {
  //   return this.workerService.loading$;
  // }
  checkLength(): boolean {
    if (this.DynTableBody.length > 0) {
      return true;
    }
    return false;
  }

  detailsElement(id: string) {
    const routeDetails = '/dettaglio/' + this.DynTableArgument + '/' + id;
    return routeDetails;
  }
}
