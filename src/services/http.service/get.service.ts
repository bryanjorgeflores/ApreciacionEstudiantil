import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlGet = 'https://student-appreciation.herokuapp.com';


@Injectable({
  providedIn: 'root'
})
export class GetService {
  constructor(
    private http: HttpClient,

  ) { }

  getResult(): Observable<any> {
    return this.http.get<any>(`${urlGet}/results`);
  }
}
