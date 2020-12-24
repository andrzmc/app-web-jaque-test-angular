import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface User {
  picture: string;
  name: string;
  fathersLastName: string;
  mothersLastName: string;
  email: string;
  roleId: number;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  hostname = environment.hostname;

  constructor(private http: HttpClient) { }

  // Services
  getUsers(): Observable<User[]> {
    return this.http.get(`${this.hostname}/assets/users.json`).pipe(map((response: any) => response.users));
  }

}
