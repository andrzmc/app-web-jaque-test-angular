import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/services/users/users.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  users$: Observable<any>;

  limit: number;
  sorts: any;

  columns =  [
    {name: 'Foto', prop: 'picture', type: 'img'}, 
    {name: 'Nombre', prop: 'name', type: 'text'}, 
    {name: 'Apellido Paterno', prop: 'fathersLastName', type: 'text'}, 
    {name: 'Apellido Materno', prop: 'mothersLastName', type: 'text'}, 
    {name: 'Correo', prop: 'email', type: 'text'}, 
    {name: 'Rol', prop: 'roleId', type: 'role'}, 
    {name: 'Status', prop: 'active', type: 'boolean'}, 
    {name: '', prop: '', type: 'action', sortable: false}
  ];
  

  constructor(private users:UsersService) { }

  ngOnInit(): void {
    this.users$ = this.users.getUsers()
  }

  catcher($event): void {
    if($event.count) this.limit = $event.value;
    if(!$event.count) this.sorts = $event.value;
  }

}
