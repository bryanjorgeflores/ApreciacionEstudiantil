import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/interfaces/models/user.model';
import { Observable } from 'rxjs';

const urlPost = 'https://student-appreciation.herokuapp.com';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,

  ) { }

  login(userLogin: User): Observable<any> {
    return this.http.post<any>(`${urlPost}/user/login`, userLogin);
  }
  register(userRegister: User): Observable<any> {
    return this.http.post<any>(`${urlPost}/user/register`, userRegister);
  }



}

