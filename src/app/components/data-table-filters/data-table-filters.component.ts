import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table-filters',
  templateUrl: './data-table-filters.component.html',
  styleUrls: ['./data-table-filters.component.css']
})
export class DataTableFiltersComponent implements OnInit {

  @Output() emiter = new EventEmitter<any>();
  @Output() search = new EventEmitter<any>();

  filters = [
    [
      { name: '4 por página', value: 4, count: true },
      { name: '8 por página', value: 8, count: true },
      { name: '12 por página', value: 12, count: true },
      { name: '16 por página', value: 16, count: true }
    ],
    [
      { name: 'Ordenar por Nombre', value: [{ prop: 'name', dir: 'asc' }], count: false },
      { name: 'Ordenar por Correo', value: [{ prop: 'email', dir: 'asc' }], count: false },
      { name: 'Ordenar por Apellido Paterno', value: [{ prop: 'fathersLastName', dir: 'asc' }], count: false },
      { name: 'Ordenar por Apellido Materno', value: [{ prop: 'mothersLastName', dir: 'asc' }], count: false }
    ]
  ];

  config = { displayKey: "name", placeholder: 'Seleccionar' };

  constructor() { }

  ngOnInit(): void {
  }

  selectChange($event) {
    this.emiter.emit($event.value);
  }

  searchChange(event) {
    this.search.emit(event);
  }

}
