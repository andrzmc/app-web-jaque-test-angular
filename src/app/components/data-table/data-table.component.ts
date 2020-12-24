import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnChanges {

  rows$: Array<any>;
  columns$: any;
  limits$: number;
  sorts$: Array<any>;

  @Input() rows: any;
  @Input() columns: any;
  @Input() limits: number;
  @Input() sorts: Array<any>;

  constructor() { }

  ngOnChanges(): void {
    if(!this.limits) this.limits$ = 4;
    else this.limits$ = this.limits;
    if(!this.sorts) this.sorts$ = [{prop: 'name', dir: 'asc'}];
    else this.sorts$ = this.sorts;
    console.log(this.sorts$);
    this.columns$ = this.columns;
    this.rows$ = this.rows;
  }

  setData(x: any, y: any): any {
    return x[`${y}`]
  }

}
