import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlPut = 'https://student-appreciation.herokuapp.com';


@Injectable({
  providedIn: 'root'
})
export class PutService {
  constructor(
    private http: HttpClient,

  ) { }

  putResults(resultsUser: any): Observable<any> {
    return this.http.put<any>(`${urlPut}/user/result`, resultsUser);
  }

}





