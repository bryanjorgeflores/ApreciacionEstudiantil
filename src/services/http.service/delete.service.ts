import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlDelete = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  constructor(
    private http: HttpClient
  ) { }

  deleteUser(idUser: string): Observable<any> {
    return this.http.delete(`${urlDelete}/user/${idUser}`);
  }
}

