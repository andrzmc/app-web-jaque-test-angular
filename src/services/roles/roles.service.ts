import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Role {
  id: number;
  position: string;
}

@Injectable({
  providedIn: 'root'
})

export class RolesService {

  hostname = environment.hostname;

  constructor(private http: HttpClient) { }

  // Services

  getRoles(): Observable<Role[]> {
    return this.http.get(`${this.hostname}/assets/roles.json`).pipe(map((response: any) => response.roles));
  }

  getRoleById(id: number): Observable<Role> {
    return this.getRoles().pipe(map(roles => roles.find(role => role.id === id)));
  }

}
