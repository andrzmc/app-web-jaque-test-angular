import { Component, Input, OnChanges  } from '@angular/core';

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
  temp = [];

  @Input() rows: any;
  @Input() columns: any;
  @Input() limits: number;
  @Input() sorts: Array<any>;
  @Input() search: string;

  constructor() { }

  ngOnChanges(): void {
    this.setLimits();
    this.setSorts();
    this.setRows();
    this.setColumns();
    if(this.search) this.updateFilter(this.search);
  }

  setLimits(): void {
    if(!this.limits) this.limits$ = 4;
    else this.limits$ = this.limits;
  }

  setSorts(): void {
    if(!this.sorts) this.sorts$ = [{prop: 'name', dir: 'asc'}];
    else this.sorts$ = this.sorts;
  }

  setRows(): void {
    if(this.rows) this.rows$ = [...this.rows];
  }

  setColumns(): void {
    this.columns$ = this.columns;
  }

  setData(x: any, y: any): any {
    return x[`${y}`]
  }

  updateFilter(event) {
    const val = event.toLowerCase();
    const temp = this.rows.filter(d => { return d.name.toLowerCase().indexOf(val) !== -1 || !val });
    this.rows$ = temp;
  }

}
