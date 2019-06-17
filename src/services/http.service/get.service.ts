import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlGet = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class GetService {
  constructor(
    private http: HttpClient,

  ) { }

}
