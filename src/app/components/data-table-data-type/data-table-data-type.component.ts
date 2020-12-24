import { Component, Input, OnChanges } from '@angular/core';
import { RolesService } from 'src/services/roles/roles.service';

@Component({
  selector: 'app-data-table-data-type',
  templateUrl: './data-table-data-type.component.html',
  styleUrls: ['./data-table-data-type.component.css']
})

export class DataTableDataTypeComponent implements OnChanges {

  @Input() data: any;
  @Input() type: string;
  @Input() prop: string;

  result: string;

  constructor(private roles: RolesService) { }

  ngOnChanges(): void { 
    if(this.type === 'role') this.roles.getRoleById(this.data[`${this.prop}`]).subscribe(value => this.result = value.position);
    if(this.type !== 'role') this.result = this.data[`${this.prop}`];
  }

}
