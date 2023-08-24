import { Component, OnInit,  ViewChild, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject, Observable, Subscription, catchError, combineLatest, debounceTime, distinctUntilChanged, of, switchMap, tap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { Mezzi } from 'src/app/interfaces/mezzi';
import { mezziTableHeaders, lista_mezzi } from 'src/app/DB/Mezzi_DB';
import { NuovoOperaioComponent } from 'src/app/pages/operai/nuovo-operaio/nuovo-operaio.component';


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

  //Local Variables
  searchField = new FormControl();
  searchSubscription!: Subscription;
  staticCounter:number = 0;    //serve a limitare gli output della tabella in base al numero di item richiesti
  dataSourceLoaderSubscription!: Subscription;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator; 

  private newSubject = new BehaviorSubject<string>('');

  private dataSubject = new BehaviorSubject<any[]>([]);
  private sortSubject = new BehaviorSubject<{active: string, direction: string}>({active: 'id', direction: ''});
  pageSubject = new BehaviorSubject<{pageIndex: number, pageSize: number}>({pageIndex: 0, pageSize: 5});
  private searchSubject = new BehaviorSubject<string>('');

  dataSource$: Observable<any[]|any> = this.dataSubject.asObservable();
  
  displayedColumns: string[] = this.DynTableHeaders;

  hideJobs: boolean = true;

  constructor(
    private router: Router,
    public dialog: MatDialog) {}

  ngOnInit() {
    //Session Storage Manager => 'searchItem' : 'value'
    if (sessionStorage['searchItem']) {
      this.searchField.patchValue(sessionStorage['searchItem']);
      this.searchSubject.next(sessionStorage['searchItem'])
    }
    if (sessionStorage['sortItem']) {
      this.sortSubject.next({active: JSON.parse(sessionStorage['sortItem']).active, direction: JSON.parse(sessionStorage['sortItem']).direction});
    } else {
      this.sortSubject.next({active: 'id', direction: ''});
    }

    //Paginator Manager => pageSize = N° item per pagina, 
    if (sessionStorage['pageItem']) {
      this.pageSubject.next({
        pageIndex: JSON.parse(sessionStorage['pageItem']).pageIndex, 
        pageSize: JSON.parse(sessionStorage['pageItem']).pageSize
      });
      
      this.paginator.pageIndex = this.pageSubject.value.pageIndex;
      this.paginator.pageSize = this.pageSubject.value.pageSize;
    }

    this.bindSearch();
    this.loadData();
  }
  //Uses Session storage to remember past values
  bindSearch() {
    this.searchSubscription = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((term)=> {
      this.changeSearch(term),
      sessionStorage.setItem('searchItem',this.searchSubject.value)
    });
  }

  loadData() {
    this.dataSourceLoaderSubscription = combineLatest([
      this.sortSubject,
      this.pageSubject,
      this.searchSubject,
      this.newSubject
    ]).pipe(
      tap(() => this.dataSubject.next([])),
      debounceTime(200),
      tap(() => {
        this.DynTableBody;          //Prima riportava service.getTotalItems(sort, page, search)
      }),
      // switchMap(() => {
      //   this.DynTableBody;          //Prima riportava service.getAllItems(sort, page, search)
      // }),
      catchError(() => of([])),
      tap((data: any) => {
        this.dataSubject.next(data);
      }),
    ).subscribe();
  }

  changeSearch(term: string) {
    this.searchSubject.next(term);
    this.paginator.pageIndex = 0;
    this.pageSubject.next({pageIndex:0,pageSize:this.paginator.pageSize});
    if (term!='') {
      this.sortSubject.next({active: '', direction: ''});
    } else {
      this.sortSubject.next({active: 'id', direction: ''});
    }
  }

  changeSort($event: any) {
    this.sortSubject.next($event);
    this.paginator.pageIndex = 0;
    this.pageSubject.next({pageIndex: 0, pageSize: this.paginator.pageSize});
  }

  changePage($event: any) {
    console.log($event)
    this.pageSubject.next({pageIndex: ($event.pageIndex + 1), pageSize: $event.pageSize});
    sessionStorage.setItem('pageItem',JSON.stringify(this.pageSubject.value));
  }

  Looper(item :any[]) {
    let arr: any[] = []
    for(let key in item) {
      let Key: any = (key[0].toUpperCase() + key.slice(1)).replace('_', ' ')
      if(this.DynTableHeaders.includes(Key)) {
        arr.push(item[key])
      }
    }
    return arr
  }
  Order(str: string) {
    this.DynTableHeaders.sort((a,b) => a[str] - b[str])
  }
  get totalLength(): number {
    //console.log('totalCount: '+ this.workerService.totalCount);
    return this.DynTableBody.length;
  }

  // get isLoading$(): Observable<boolean> {
  //   return this.workerService.loading$;
  // }
  checkLength(): boolean {
    if(this.DynTableBody.length > 0) {
      return true
    }
    return false
  }
}